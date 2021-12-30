import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { commonStyles, colors } from '../styles/CommonStyles';

const LineStrokeText = ({
  message = '',
  messageStyle = {},
  containerStyle,
}) => {
  return (
    <View style={[commonStyles.row, containerStyle]}>
      <View style={styles.line} />
      <Text style={[styles.message, messageStyle]}>{message}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default memo(LineStrokeText);

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#00000033',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  message: { alignSelf: 'center', paddingHorizontal: 8, fontSize: 13 },
});
