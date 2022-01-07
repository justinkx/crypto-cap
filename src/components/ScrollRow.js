import React, { memo } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const ScrollRow = ({ width, rowStyle = {}, children, onClick }) => {
  return (
    <View style={[styles.wrapper, { width }]}>
      <TouchableOpacity onPress={onClick}>
        <View style={[styles.container, rowStyle]}>{children}</View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(ScrollRow);

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 1,
    paddingHorizontal: 10,
  },
});
