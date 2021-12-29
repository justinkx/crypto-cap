import React, { memo, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

import {
  commonStyles,
  FONT_OUTFIT_BOLD,
  FONT_SEMI_BOLD,
} from '../styles/CommonStyles';
import { balance } from '../utils/data';
import { pieColor } from '../utils/helpers';

const PIE_CHART_SIZE = 80;

const TotalBalance = () => {
  const pieData = useMemo(
    () =>
      balance.map(({ equivalentUsd = 1 }, index) => ({
        value: equivalentUsd,
        svg: {
          fill: pieColor(index),
        },
        key: `pie-${index}`,
      })),
    []
  );

  console.log(pieData);
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[
            commonStyles.primaryTintColor,
            styles.title,
            commonStyles.fontMedium,
          ]}
        >
          Total Balance
        </Text>
        <Text style={[commonStyles.whiteColor, styles.balance]}>
          <Text style={[commonStyles.primaryTintColor, commonStyles.fontBold]}>
            $
          </Text>
          {' 90,659'}
          <Text style={[commonStyles.primaryTintColor, commonStyles.fontBold]}>
            .55
          </Text>
        </Text>
        <Text style={[commonStyles.whiteColor, styles.btcEquivalent]}>
          2.001234998 <Text style={commonStyles.primaryTintColor}>BTC</Text>
        </Text>
      </View>
      <PieChart
        style={{ height: PIE_CHART_SIZE, width: PIE_CHART_SIZE }}
        data={pieData}
        innerRadius={'70%'}
      />
    </View>
  );
};

export default memo(TotalBalance);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    paddingBottom: 10,
  },
  balance: {
    fontSize: 26,
    fontFamily: FONT_OUTFIT_BOLD,
    paddingBottom: 4,
  },
  btcEquivalent: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 18,
  },
});
