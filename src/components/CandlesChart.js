import React, { memo, useState, useEffect } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
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
import { colors, commonStyles } from '../styles/CommonStyles';
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
      <View>
        <View style={commonStyles.row}></View>
      </View>
    </View>
  );
};

export default memo(CandlesChart);

const styles = StyleSheet.create({});
