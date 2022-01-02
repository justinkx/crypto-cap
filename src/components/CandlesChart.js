import React, { memo, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
  OpeningPositionHorizontalLine,
  CurrentPositionVerticalLine,
} from '@rainbow-me/animated-charts';

import { CANDLES } from '../utils/api';
import { colors, commonStyles, FONT_BOLD } from '../styles/CommonStyles';
import { parseCandles } from '../utils/helpers';

const CandlesChart = ({ coin, containerStyle }) => {
  const { width } = useWindowDimensions();
  const SIZE = width - 20;

  const [priceCandles, setPriceCandles] = useState([]);
  const [marketCapCandles, setMarketCapCandles] = useState([]);
  const [showPrice, setShowPrice] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await axios.get(CANDLES({ coin }));
        const { market_caps = [], prices = [] } = data;
        setPriceCandles(parseCandles(prices));
        setMarketCapCandles(parseCandles(market_caps));
      } catch (error) {}
    }
    if (coin) {
      fetch();
    }
  }, [coin]);

  return (
    <>
      <View
        style={[
          commonStyles.row,
          commonStyles.center,
          commonStyles.spaceBetween,
          commonStyles.page,
          styles.chipContainer,
        ]}
      >
        <Chip
          isActive={showPrice}
          name={'Prices'}
          onPress={() => setShowPrice(true)}
        />
        <Chip
          isActive={!showPrice}
          name={'Market Cap'}
          onPress={() => setShowPrice(false)}
        />
      </View>

      <View style={containerStyle}>
        <ChartPathProvider
          data={{
            points: monotoneCubicInterpolation({
              data: showPrice ? priceCandles : marketCapCandles,
              range: 40,
            }),
            smoothingStrategy: 'bezier',
          }}
        >
          <ChartPath height={SIZE / 2} stroke={colors.white} width={SIZE} />
          <ChartDot style={{ backgroundColor: 'blue' }} />
          <OpeningPositionHorizontalLine
            color={colors.primaryTint}
            length={SIZE}
          />
          <CurrentPositionVerticalLine
            color={colors.errorTint}
            length={SIZE / 2}
          />
        </ChartPathProvider>
      </View>
    </>
  );
};

const Chip = memo(({ onPress, name, textStyle, isActive }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.chip, commonStyles.center, isActive && styles.activeChip]}
  >
    <Text
      style={[styles.chipName, textStyle, isActive && styles.activeChipName]}
    >
      {name}
    </Text>
  </TouchableOpacity>
));
export default memo(CandlesChart);

const styles = StyleSheet.create({
  chipContainer: { marginTop: 20 },
  chipName: {
    fontSize: 12,
  },
  activeChipName: {
    fontFamily: FONT_BOLD,
  },
  chip: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  activeChip: {
    backgroundColor: colors.wallet,
  },
});
