import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import Page from '../components/Page';
import TotalBalance from '../components/TotalBalance';
import BalanceWallets from '../components/BalanceWallets';
import { commonStyles } from '../styles/CommonStyles';

const DashBoard = () => {
  return (
    <Page padding scroll={false} containerStyle={commonStyles.page}>
      <TotalBalance />
      <BalanceWallets />
    </Page>
  );
};

export default memo(DashBoard);

const styles = StyleSheet.create({});
