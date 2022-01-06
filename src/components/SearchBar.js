import React, { memo } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colors, commonStyles } from '../styles/CommonStyles';

const SearchBar = ({
  value,
  onChange,
  containerStyle,
  inputStyle,
  placeholder = '',
}) => {
  return (
    <View
      style={[
        commonStyles.row,
        commonStyles.spaceBetween,
        styles.container,
        containerStyle,
      ]}
    >
      <TextInput
        value={value}
        onChangeText={onChange}
        style={[styles.input, commonStyles.fontBold, inputStyle]}
        placeholder={placeholder}
      />
      <AntDesign name="search1" size={18} color={colors.primaryFade} />
    </View>
  );
};

export default memo(SearchBar);

const styles = StyleSheet.create({
  container: {
    height: 30,
    paddingHorizontal: 10,
    paddingLeft: 15,
    paddingVertical: 5,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 30 / 2,
    backgroundColor: colors.white,
  },
  input: {
    width: '90%',
    fontSize: 13,
  },
});
