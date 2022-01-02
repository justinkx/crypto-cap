import React, { memo, useRef, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

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
  changePercent24Hr,
  marketCapUsd,
  name,
  priceUsd,
  rank,
  symbol,
  id,
}) => {
  const change24Hr = parseFloat(changePercent24Hr).toFixed(2);
  const isUp = change24Hr > 0;
  const priceChange = useSharedValue(colors.white);
  const prevPriceUsd = useRef(0);
  const navigation = useNavigation();

  useEffect(() => {
    const animateWorklet = (priceUsd, prevPriceUsd) => {
      'worklet';
      if (priceUsd > prevPriceUsd.current) {
        priceChange.value = withTiming(colors.successTint, {}, () => {
          priceChange.value = withTiming(colors.white);
        });
      } else {
        priceChange.value = withTiming(colors.errorTint, {}, () => {
          priceChange.value = withTiming(colors.white);
        });
      }
      prevPriceUsd.current = priceUsd;
    };
    if (priceUsd && prevPriceUsd.current !== priceUsd) {
      animateWorklet(priceUsd, prevPriceUsd);
    }
  }, [priceUsd, priceChange]);

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
          <Text style={styles.index}>{rank}</Text>
          <AssetIcon symbol={symbol} iconStyle={styles.icon} />
          <View style={styles.symbolView}>
            <Text
              textBreakStrategy={'highQuality'}
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={styles.name}
            >
              {name}
            </Text>
            <Text style={styles.symbol}>{symbol}</Text>
          </View>
        </View>
        <View style={styles.priceView}>
          <View style={commonStyles.row}>
            <Text style={styles.priceUsd}>
              <Text style={styles.price}>Price: </Text>$
              {parseFloat(priceUsd).toFixed(2)}
            </Text>
            <PriceDirection price={parseFloat(priceUsd).toFixed(2)} />
          </View>

          <Text style={styles.marketCapUsd}>
            <Text style={styles.marketCap}>Market Cap: </Text>$
            {NumbFormat({ number: marketCapUsd })}
          </Text>
        </View>
        <View style={styles.priceChangeView}>
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
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  priceView: { width: '35%' },
  priceChangeView: { width: '15%', alignItems: 'flex-end' },
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
  priceUsd: {
    fontFamily: FONT_BOLD,
    color: colors.black,
    fontSize: 12,
  },
  marketCapUsd: {
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
