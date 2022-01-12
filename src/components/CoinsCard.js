import React, { memo, useRef, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import _toUpper from 'lodash/toUpper';
import { LineChart } from 'react-native-svg-charts';

import {
  commonStyles,
  colors,
  FONT_BOLD,
  FONT_MEDIUM,
  FONT_SEMI_BOLD,
} from '../styles/CommonStyles';
import { NumbFormat } from '../utils/helpers';
import AssetIcon from './AssetIcon';
import PriceDirection from './PriceDirection';
import { COIN_DETAILS_SCREEN } from '../navigation/NavConstants';

const CoinsCard = ({
  price_change_percentage_24h,
  market_cap,
  name,
  current_price,
  market_cap_rank,
  symbol,
  id,
  image,
  sparkline_in_7d = {},
}) => {
  const { price = [] } = sparkline_in_7d;

  const change24Hr = parseFloat(price_change_percentage_24h).toFixed(2);
  const isUp = change24Hr > 0;
  const priceChange = useSharedValue(colors.white);
  const prevcurrent_price = useRef(0);
  const navigation = useNavigation();

  useEffect(() => {
    const animateWorklet = (current_price, prevcurrent_price) => {
      'worklet';
      if (current_price > prevcurrent_price.current) {
        priceChange.value = withTiming(colors.successTint, {}, () => {
          priceChange.value = withDelay(200, withTiming(colors.white));
        });
      } else {
        priceChange.value = withTiming(colors.errorTint, {}, () => {
          priceChange.value = withDelay(200, withTiming(colors.white));
        });
      }
      prevcurrent_price.current = current_price;
    };
    if (current_price && prevcurrent_price.current !== current_price) {
      animateWorklet(current_price, prevcurrent_price);
    }
  }, [current_price, priceChange]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: priceChange.value,
    };
  });

  const handleNavigation = useCallback(
    () => navigation.navigate(COIN_DETAILS_SCREEN, { id, title: name }),
    [navigation, id, name]
  );

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <TouchableOpacity
        style={[commonStyles.row, styles.card]}
        onPress={handleNavigation}
      >
        <View style={[commonStyles.row, styles.nameView]}>
          <Text style={styles.index}>{market_cap_rank}</Text>
          <AssetIcon symbol={symbol} url={image} iconStyle={styles.icon} />
          <View style={styles.symbolView}>
            <Text
              textBreakStrategy={'highQuality'}
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={styles.name}
            >
              {name}
            </Text>
            <Text style={styles.symbol}>{_toUpper(symbol)}</Text>
          </View>
        </View>
        <View style={styles.priceView}>
          <View style={commonStyles.row}>
            <Text style={styles.current_price}>
              <Text style={styles.price}>Price: </Text>$
              {parseFloat(current_price).toFixed(2)}
            </Text>
            <PriceDirection price={parseFloat(current_price).toFixed(2)} />
          </View>

          <Text style={styles.market_cap}>
            <Text style={styles.marketCap}>Market Cap: </Text>$
            {NumbFormat({ number: market_cap })}
          </Text>
        </View>
        <View style={styles.priceChangeView}>
          {price && (
            <LineChart
              style={{ height: 30, width: '95%' }}
              data={price}
              svg={{ stroke: isUp ? colors.success : colors.error }}
              contentInset={{ top: 5, bottom: 5 }}
            />
          )}
          <Text style={[styles.change24, isUp ? styles.up : styles.down]}>
            {change24Hr}% {isUp ? '▲' : '▼'}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default memo(CoinsCard);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    height: 60,
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
  card: { alignItems: 'center', justifyContent: 'flex-start' },
  icon: { width: 35, height: 35, marginHorizontal: 5 },
  change24: { fontSize: 12, fontFamily: FONT_MEDIUM },
  up: { color: colors.success },
  down: { color: colors.error },
  index: { fontFamily: FONT_BOLD, color: colors.black, fontSize: 10 },
  nameView: {
    width: '45%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  priceView: { width: '37%' },
  priceChangeView: { width: '18%', alignItems: 'flex-end' },
  name: {
    fontFamily: FONT_BOLD,
    color: colors.primary,
    fontSize: 14,
  },
  symbolView: { flex: 1, paddingRight: 5 },
  symbol: {
    fontFamily: FONT_SEMI_BOLD,
    color: colors.primaryFade,
    fontSize: 13,
  },
  price: {
    fontFamily: FONT_BOLD,
    color: colors.black,
    fontSize: 12,
    opacity: 0.5,
  },
  current_price: {
    fontFamily: FONT_BOLD,
    color: colors.black,
    fontSize: 12,
  },
  market_cap: {
    fontFamily: FONT_BOLD,
    color: colors.black,
    fontSize: 10,
    opacity: 0.5,
    paddingTop: 4,
  },
  marketCap: {
    fontFamily: FONT_BOLD,
    color: colors.black,
    fontSize: 11,
  },
});
