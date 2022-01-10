import React, { memo } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
} from 'victory-native';

const Volume = ({}) => {
  const { width } = useWindowDimensions();
  return (
    <View>
      <VictoryChart width={width - 20} height={200} padding={10}>
        <VictoryBar style={{ data: { fill: '#c43a31' } }} />
      </VictoryChart>
    </View>
  );
};

export default memo(Volume);

const styles = StyleSheet.create({});
