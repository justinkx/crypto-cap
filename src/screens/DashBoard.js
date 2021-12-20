import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Page from '../components/Page';
import TotalBalance from '../components/TotalBalance';

const DashBoard = () => {
  return (
    <Page padding>
      <TotalBalance />
    </Page>
  );
};

export default memo(DashBoard);

const styles = StyleSheet.create({});
