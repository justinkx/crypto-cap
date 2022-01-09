import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { commonStyles, colors } from '../../styles/CommonStyles';

const TickerItem = ({ base, target, trust_score }) => {
  console.log({ trust_score });
  return (
    <View>
      <Text>
        {base} / {target}
      </Text>
    </View>
  );
};

export default memo(TickerItem);

const styles = StyleSheet.create({});
