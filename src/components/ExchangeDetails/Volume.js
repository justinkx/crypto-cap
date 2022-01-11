import React, { memo, useMemo, useState, useCallback } from 'react';
import {
  View,
  useWindowDimensions,
  Switch,
  Text,
  StyleSheet,
} from 'react-native';
import { VictoryArea, VictoryChart, VictoryAxis } from 'victory-native';
import _take from 'lodash/take';
import { format } from 'date-fns';

import { isIos, commonStyles, colors } from '../../styles/CommonStyles';
import { NumbFormat } from '../../utils/helpers';

const ANIMATION_DURATION = 1000;

const Volume = ({ volumeChart = [] }) => {
  const [minimal, setMinimal] = useState(true);

  const { width, height } = useWindowDimensions();

  const data = useMemo(
    () =>
      minimal
        ? _take(volumeChart, 10)
        : _take(volumeChart, Math.min(volumeChart.length, 20)),
    [minimal, volumeChart]
  );

  const toggleSwitch = useCallback(() => setMinimal((prev) => !prev), []);
  return (
    <View style={styles.container}>
      <View
        style={[
          commonStyles.row,
          commonStyles.page,
          commonStyles.center,
          { marginBottom: 20 },
        ]}
      >
        <Text style={[styles.minimal, commonStyles.fontBold]}>Minimal</Text>
        <View style={styles.switch}>
          <Switch
            trackColor={{ false: 'gray', true: colors.success }}
            thumbColor={colors.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={minimal}
          />
        </View>
      </View>
      <VictoryChart
        width={width}
        height={height - 300}
        padding={{ left: 40, bottom: 25, right: 20, top: 10 }}
      >
        <VictoryArea
          data={data}
          animate={{
            duration: ANIMATION_DURATION,
            onLoad: { duration: ANIMATION_DURATION },
          }}
          style={areaStyle}
          x={0}
          y={1}
        />
        <VictoryAxis
          dependentAxis
          style={{
            grid: { stroke: '#F4F5F7', strokeWidth: 0.5 },
            tickLabels: { fontSize: 8, fill: colors.white },
            axis: { stroke: colors.white },
          }}
          animate={{ duration: 200 }}
          tickFormat={(tick) => NumbFormat({ number: tick })}
        />
        <VictoryAxis
          style={{
            grid: { stroke: '#F4F5F7', strokeWidth: 0.5 },
            tickLabels: { fontSize: 8, fill: colors.white },
            axis: { stroke: colors.white },
          }}
          animate={{ duration: 200 }}
          tickFormat={(tick) => format(tick, 'hh:mm ss')}
        />
      </VictoryChart>
    </View>
  );
};

export default memo(Volume);

const areaStyle = {
  data: {
    fill: colors.exchangeTint,
    stroke: 'rgb(21, 180, 241)',
    strokeWidth: 2,
  },
  labels: {
    fill: colors.black,
    fontSize: 10,
  },
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  switch: {
    transform: isIos
      ? [{ scaleX: 0.6 }, { scaleY: 0.6 }]
      : [{ scaleX: 1 }, { scaleY: 1 }],
  },
  minimal: {
    fontSize: 14,
    color: colors.white,
  },
});
