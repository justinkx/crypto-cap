import React, { memo, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { LineChart } from 'react-native-svg-charts';
import _toLower from 'lodash/toLower';
import _toUpper from 'lodash/toUpper';
import _isEqual from 'react-fast-compare';
import { useNavigation } from '@react-navigation/native';

import { commonStyles, colors, FONT_BOLD } from '../../styles/CommonStyles';
import { getCryptoAssets } from '../../store/selectors/assetSelector';
import PriceDirection from '../PriceDirection';
import {
  COINS_STACK,
  COIN_DETAILS_SCREEN,
} from '../../navigation/NavConstants';

const BalanceCoin = ({ name, balance }) => {
  const [coinDetails] = useSelector(
    (state) => getCryptoAssets(state)(_toLower(name)),
    shallowEqual
  );
  const navigation = useNavigation();

  const change24Hr = parseFloat(
    coinDetails?.price_change_percentage_24h
  ).toFixed(2);
  const isUp = change24Hr > 0;

  const navigateCoinDetails = useCallback(
    () =>
      navigation.navigate(COINS_STACK, {
        screen: COIN_DETAILS_SCREEN,
        params: {
          title: coinDetails?.name,
          id: coinDetails?.id,
        },
        initial: true,
      }),
    [navigation, coinDetails]
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={navigateCoinDetails}
        style={[
          commonStyles.row,
          commonStyles.center,
          commonStyles.spaceBetween,
        ]}
      >
        <View style={[commonStyles.row, styles.dataView]}>
          <Image style={styles.image} source={{ uri: coinDetails?.image }} />
          <View>
            <Text style={[commonStyles.fontBold, styles.name]}>
              {coinDetails?.name}
            </Text>
            <Text style={[commonStyles.fontSemibold, styles.symbol]}>
              {_toUpper(coinDetails?.symbol)}
            </Text>
          </View>
        </View>
        <View style={styles.balanceView}>
          <Text style={[styles.balance, commonStyles.fontBold]}>{balance}</Text>
          <Text style={[styles.usdBalance, commonStyles.fontSemibold]}>
            ${parseFloat(coinDetails?.current_price * balance).toFixed(2)}
          </Text>
        </View>
        <View style={styles.changeView}>
          <LineChart
            style={styles.lineChart}
            data={coinDetails?.sparkline_in_7d?.price || []}
            svg={{ stroke: isUp ? colors.success : colors.error }}
            contentInset={{ top: 5, bottom: 5 }}
          />
          <View style={[commonStyles.row]}>
            <Text style={[styles.price]}>
              {parseFloat(coinDetails?.current_price)}
            </Text>
            <PriceDirection price={coinDetails?.current_price} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(
  BalanceCoin,
  (prevProps, nextProps) =>
    !nextProps.isMarketTicker || _isEqual(nextProps, prevProps)
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    height: 60,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    backgroundColor: colors.white,
  },
  dataView: {
    width: '40%',
  },
  image: {
    width: 35,
    height: 35,
    marginRight: 6,
  },
  name: {
    fontSize: 14,
    color: colors.black,
  },
  symbol: {
    fontSize: 13,
    marginTop: 3,
    color: colors.primary,
  },
  balance: {
    fontSize: 15,
    color: colors.black,
  },
  usdBalance: {
    fontSize: 13,
    marginTop: 3,
    color: colors.primary,
  },
  balanceView: {
    width: '35%',
  },
  changeView: {
    width: '25%',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 12,
    fontFamily: FONT_BOLD,
  },
  lineChart: {
    height: 30,
    width: '95%',
  },
});
