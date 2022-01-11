import React, { memo, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { format } from 'date-fns';
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryCandlestick,
  VictoryTheme,
  VictoryZoomContainer,
} from 'victory-native';

import { CANDLES, MARKET_CHART } from '../utils/api';
import { colors, commonStyles, FONT_BOLD } from '../styles/CommonStyles';
import { apiChain } from '../utils/helpers';
import { NumbFormat } from '../utils/helpers';

const CandlesChart = ({ coin, containerStyle }) => {
  const { width } = useWindowDimensions();

  const [priceCandles, setPriceCandles] = useState([]);
  const [marketCapCandles, setMarketCapCandles] = useState([]);
  const [showPrice, setShowPrice] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const [candles, marketData] = await apiChain([
          fetch(CANDLES({ coin })),
          fetch(MARKET_CHART({ coin })),
        ]);
        const { market_caps = [] } = marketData;
        setPriceCandles(candles);
        setMarketCapCandles(market_caps);
      } catch (error) {}
    }
    if (coin) {
      init();
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
        <VictoryChart
          width={width}
          height={180}
          padding={{ left: 50, bottom: 25, right: 40, top: 10 }}
          containerComponent={<VictoryZoomContainer allowZoom />}
          style={{ tickLabels: { fontSize: 8, fill: colors.white } }}
        >
          <VictoryAxis
            dependentAxis
            style={{
              tickLabels: { fontSize: 8, fill: colors.white },
              axis: { stroke: colors.white },
              grid: showPrice
                ? {}
                : {
                    stroke: '#F4F5F7',
                    strokeWidth: StyleSheet.hairlineWidth,
                  },
            }}
            tickFormat={(tick) => NumbFormat({ number: tick })}
          />
          <VictoryAxis
            style={{
              tickLabels: { fontSize: 8, fill: colors.white },
              axis: { stroke: colors.white },
            }}
            tickFormat={(tick) => format(tick, 'hh:mm ss')}
          />
          {showPrice ? (
            <VictoryCandlestick
              candleRatio={0.9}
              animate
              data={priceCandles}
              x={0}
              open={1}
              close={4}
              high={2}
              low={3}
              theme={VictoryTheme.material}
              candleColors={{
                positive: colors.success,
                negative: colors.error,
              }}
              style={{
                data: {
                  stroke: colors.white,
                  strokeWidth: StyleSheet.hairlineWidth,
                },
              }}
            />
          ) : (
            <VictoryLine
              animate
              data={marketCapCandles}
              x={0}
              y={1}
              theme={VictoryTheme.material}
              style={{
                data: {
                  stroke: colors.success,
                  strokeWidth: 2,
                },
              }}
            />
          )}
        </VictoryChart>
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
