import React, { memo } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { commonStyles, colors } from '../../styles/CommonStyles';

const DashboardPriceChange = () => {
  return (
    <View
      style={[commonStyles.flex, commonStyles.col, commonStyles.spaceBetween]}
    >
      <Text>24hr change</Text>
    </View>
  );
};

export default memo(DashboardPriceChange);

const styles = StyleSheet.create({});
