import React, { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Page from '../components/Page';
import TotalBalance from '../components/Dashboard/TotalBalance';
import BalanceWallets from '../components/Dashboard/BalanceWallets';
import DashboardPriceChange from '../components/Dashboard/DashboardPriceChange';
import LineStrokeText from '../components/LineStrokeText';
import { commonStyles, colors } from '../styles/CommonStyles';

const DashBoard = () => {
  const insets = useSafeAreaInsets();
  return (
    <Page scroll={false}>
      <View style={commonStyles.page}>
        <TotalBalance />
        <BalanceWallets />
      </View>
      <View
        style={[
          commonStyles.flex,
          styles.priceChangeContainer,
          { paddingBottom: insets.bottom },
        ]}
      >
        <LineStrokeText
          containerStyle={styles.lineStrokeText}
          message={'24h price changes'}
        />
        <DashboardPriceChange />
      </View>
    </Page>
  );
};

export default memo(DashBoard);

const styles = StyleSheet.create({
  priceChangeContainer: { backgroundColor: colors.white },
  lineStrokeText: { margin: 10 },
});
