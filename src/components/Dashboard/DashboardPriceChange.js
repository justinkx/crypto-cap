import React, { memo, useCallback } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { LineChart } from 'react-native-svg-charts';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  commonStyles,
  colors,
  FONT_BOLD,
  FONT_MEDIUM,
} from '../../styles/CommonStyles';
import { getCryptoAssets } from '../../store/selectors/assetSelector';
import { balanceCoins } from '../../utils/data';
import PriceDirection from '../PriceDirection';
import AssetIcon from '../AssetIcon';
import {
  COINS_STACK,
  COIN_DETAILS_SCREEN,
} from '../../navigation/NavConstants';

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
        bounces
      />
      <View style={[styles.bottomButton, commonStyles.row]}>
        <TouchableOpacity style={[commonStyles.row, commonStyles.center]}>
          <MaterialCommunityIcons
            name="upload"
            size={24}
            color={colors.error}
          />
          <Text style={[commonStyles.whiteColor, commonStyles.fontBold]}>
            SEND
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.qrCode, commonStyles.center]}>
          <MaterialIcons
            name="qr-code-scanner"
            size={22}
            color={colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[commonStyles.row, commonStyles.center]}>
          <MaterialCommunityIcons
            name="download"
            size={24}
            color={colors.success}
          />
          <Text style={[commonStyles.whiteColor, commonStyles.fontBold]}>
            REQUEST
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const RenderBalance = memo(
  ({
    price_change_percentage_24h,
    name,
    current_price,
    symbol,
    image,
    sparkline_in_7d = {},
    id,
  }) => {
    const navigation = useNavigation();
    const change24Hr = parseFloat(price_change_percentage_24h).toFixed(2);
    const isUp = change24Hr > 0;

    const { price = [] } = sparkline_in_7d;

    const handleBuy = useCallback(
      () =>
        navigation.navigate(COINS_STACK, {
          screen: COIN_DETAILS_SCREEN,
          params: {
            title: name,
            id: id,
          },
          initial: true,
        }),
      [name, id, navigation]
    );

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
            <AssetIcon symbol={symbol} iconStyle={styles.icon} url={image} />
            <View>
              <Text style={styles.name}>{name}</Text>
              <View style={[commonStyles.row, commonStyles.center]}>
                <Text style={styles.current_price}>
                  ${parseFloat(current_price).toFixed(2)}
                </Text>
                <PriceDirection price={parseFloat(current_price).toFixed(2)} />
              </View>
            </View>
          </View>
          <View style={styles.rightView}>
            {price && (
              <LineChart
                style={{ height: 50 }}
                data={price}
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
          <TouchableOpacity
            onPress={handleBuy}
            style={[commonStyles.flex, commonStyles.center]}
          >
            <Text style={[commonStyles.fontBold, commonStyles.primaryColor]}>
              BUY
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

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
  icon: { width: 35, height: 35, marginRight: 10 },
  name: { fontFamily: FONT_MEDIUM, fontSize: 13 },
  current_price: { fontFamily: FONT_BOLD, fontSize: 14, paddingTop: 2 },
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
