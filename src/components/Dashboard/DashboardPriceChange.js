import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import axios from 'axios';
import _size from 'lodash/size';
import _get from 'lodash/get';
import _map from 'lodash/map';
import { LineChart } from 'react-native-svg-charts';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import {
  commonStyles,
  colors,
  FONT_BOLD,
  FONT_MEDIUM,
} from '../../styles/CommonStyles';
import { getCryptoAssets } from '../../store/selectors/assetSelector';
import { balanceCoins } from '../../utils/data';
import { CRYPTO_ASSET_SMALL, CRYPTO_COIN_24HR_CHANGE } from '../../utils/api';

const HEIGHT = 75;

const DashboardPriceChange = () => {
  const balanceMarketChanges = useSelector(
    (state) => getCryptoAssets(state)(balanceCoins),
    shallowEqual
  );

  const keyExtractor = useCallback((item) => item?.id, []);

  const renderItem = useCallback(({ item }) => <RenderBalance {...item} />, []);
  return (
    <View
      style={[commonStyles.flex, commonStyles.col, commonStyles.spaceBetween]}
    >
      <FlatList
        data={balanceMarketChanges}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      <TouchableOpacity style={[styles.bottomButton, commonStyles.row]}>
        <View style={[commonStyles.row, commonStyles.center]}>
          <MaterialCommunityIcons
            name="upload"
            size={24}
            color={colors.error}
          />
          <Text style={[commonStyles.whiteColor, commonStyles.fontBold]}>
            SEND
          </Text>
        </View>
        <View style={[styles.qrCode, commonStyles.center]}>
          <MaterialIcons
            name="qr-code-scanner"
            size={22}
            color={colors.white}
          />
        </View>
        <View style={[commonStyles.row, commonStyles.center]}>
          <MaterialCommunityIcons
            name="download"
            size={24}
            color={colors.success}
          />
          <Text style={[commonStyles.whiteColor, commonStyles.fontBold]}>
            REQUEST
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const RenderBalance = memo(({ changePercent24Hr, name, priceUsd, symbol }) => {
  const change24Hr = parseFloat(changePercent24Hr).toFixed(2);
  const isUp = change24Hr > 0;
  const [prices, setPrices] = useState([]);

  /* eslint-disable radix */

  useEffect(() => {
    async function fetchPrices() {
      try {
        const { data } = await axios.get(CRYPTO_COIN_24HR_CHANGE(name));
        const _prices24hr = _get(data, 'prices');
        const _prices = _map(_prices24hr, ([_, price]) => parseInt(price));
        setPrices(_prices);
      } catch (error) {}
    }
    if (!_size(prices) && name) {
      fetchPrices();
    }
  }, [name, prices]);

  console.log({ name, prices });
  return (
    <View
      style={[
        commonStyles.row,
        commonStyles.spaceBetween,
        styles.cardContainer,
      ]}
    >
      <View
        style={[
          styles.boxShadow,
          styles.tickerCard,
          commonStyles.row,
          commonStyles.spaceBetween,
        ]}
      >
        <View style={[styles.leftView, commonStyles.row]}>
          <Image
            style={styles.icon}
            source={{ uri: CRYPTO_ASSET_SMALL(symbol) }}
          />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.priceUsd}>
              ${parseFloat(priceUsd).toFixed(2)}
            </Text>
          </View>
        </View>
        <View style={styles.rightView}>
          {prices && (
            <LineChart
              style={{ height: 50 }}
              data={prices}
              svg={{ stroke: isUp ? colors.success : colors.error }}
              contentInset={{ top: 20, bottom: 20 }}
            />
          )}
          <Text style={[styles.change24, isUp ? styles.up : styles.down]}>
            {change24Hr}% {isUp ? '▲' : '▼'}
          </Text>
        </View>
      </View>
      <View style={[styles.boxShadow, styles.tickerBuy]}>
        <TouchableOpacity style={[commonStyles.flex, commonStyles.center]}>
          <Text style={[commonStyles.fontBold, commonStyles.primaryColor]}>
            BUY
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default memo(DashboardPriceChange);

const styles = StyleSheet.create({
  cardContainer: { padding: 10 },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 10,
    height: HEIGHT,
    backgroundColor: colors.white,
  },
  tickerCard: { flex: 1, padding: 10, alignItems: 'center' },
  leftView: {},
  rightView: {},
  tickerBuy: { width: HEIGHT, height: HEIGHT, marginLeft: 15 },
  icon: { width: 35, height: 35, marginRight: 5 },
  name: { fontFamily: FONT_MEDIUM, fontSize: 13 },
  priceUsd: { fontFamily: FONT_BOLD, fontSize: 14, paddingTop: 2 },
  change24: { fontSize: 12, fontFamily: FONT_MEDIUM },
  up: { color: colors.success },
  down: { color: colors.error },
  bottomButton: {
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  qrCode: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: colors.primaryFade,
  },
});
