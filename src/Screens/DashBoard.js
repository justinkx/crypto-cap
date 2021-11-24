import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Page from '../Components/Page';

const DashBoard = () => {
  return (
    <Page>
      <Text>DashBoard</Text>
    </Page>
  );
};

export default memo(DashBoard);

const styles = StyleSheet.create({});
