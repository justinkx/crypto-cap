import React, { memo, useCallback } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { LineChart } from 'react-native-svg-charts';
import _toLower from 'lodash/toLower';
import _toUpper from 'lodash/toUpper';

import {
  commonStyles,
  colors,
  FONT_BOLD,
  FONT_MEDIUM,
} from '../../styles/CommonStyles';
import { getCryptoAssets } from '../../store/selectors/assetSelector';

const BalanceCoin = ({ token, isMarketTicker, name, balance }) => {
  const [coinDetails] = useSelector(
    (state) => getCryptoAssets(state)(_toLower(name)),
    shallowEqual
  );

  return (
    <View style={styles.container}>
      <View
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
        <View style={styles.baanceView}>
          <Text style={[styles.balance, commonStyles.fontBold]}>{balance}</Text>
          <Text style={[styles.usdBalance, commonStyles.fontSemibold]}>
            {parseFloat(coinDetails?.current_price * balance).toFixed(2)} $
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(BalanceCoin);

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
  baanceView: {
    width: '30%',
  },
});
