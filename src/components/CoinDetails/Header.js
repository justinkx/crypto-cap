import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import _toUpper from 'lodash/toUpper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import { commonStyles, colors } from '../../styles/CommonStyles';
import AssetIcon from '../AssetIcon';
import PriceDirection from '../PriceDirection';
import { NumbFormat } from '../../utils/helpers';

const Header = ({
  name,
  symbol,
  current_price,
  market_cap_rank,
  market_cap,
  total_volume,
}) => {
  const openInfo = useCallback(
    () =>
      Linking.openURL(`https://www.coingecko.com/en/coins/${_toUpper(name)}`),
    [name]
  );
  return (
    <View
      style={[
        commonStyles.row,
        commonStyles.page,
        commonStyles.spaceBetween,
        styles.container,
      ]}
    >
      <View style={commonStyles.row}>
        <AssetIcon symbol={symbol} iconStyle={styles.iconStyle} />
        <View style={styles.nameView}>
          <Text style={[styles.name, commonStyles.fontBold]}>{name}</Text>
          <View style={commonStyles.row}>
            <Text style={styles.symbol}>{_toUpper(symbol)}</Text>
            <TouchableOpacity style={styles.info} onPress={openInfo}>
              <MaterialIcons name="info" size={14} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Text style={[styles.title]}>
          Market Cap:{' '}
          <Text style={[styles.current_price, commonStyles.fontSemibold]}>
            {NumbFormat({ number: market_cap })}
          </Text>
        </Text>
        <Text style={[styles.title]}>
          Volume (24hr):{' '}
          <Text style={[styles.current_price, commonStyles.fontSemibold]}>
            {NumbFormat({ number: total_volume })}
          </Text>
        </Text>
      </View>
      <View style={{ alignItems: 'flex-end', paddingLeft: 10 }}>
        <View style={commonStyles.row}>
          <Text style={[styles.current_price, commonStyles.fontSemibold]}>
            {parseFloat(current_price).toFixed(2)}
          </Text>
          <PriceDirection price={parseFloat(current_price).toFixed(2)} />
        </View>
        <View style={styles.shield}>
          <MaterialCommunityIcons
            name="shield"
            size={20}
            color={colors.wallet}
          />
          <Text style={[commonStyles.fontBold, styles.market_cap_rank]}>
            {market_cap_rank}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  container: { alignItems: 'flex-start' },
  iconStyle: {
    width: 40,
    height: 40,
  },
  nameView: {
    paddingLeft: 15,
  },
  name: {
    color: colors.white,
    fontSize: 14,
  },
  symbol: {
    color: colors.primaryTint,
    fontSize: 12,
  },
  current_price: { fontSize: 12, color: colors.white, textAlign: 'auto' },
  shield: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  market_cap_rank: {
    position: 'absolute',
    color: colors.white,
    fontSize: 10,
  },
  title: {
    color: colors.primaryTint,
    fontSize: 12,
  },
  info: { marginLeft: 4 },
});
