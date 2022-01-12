import React, { memo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { commonStyles, colors } from '../../styles/CommonStyles';

const WalletTransfer = () => {
  return (
    <View
      style={[commonStyles.row, commonStyles.center, styles.walletTransfer]}
    >
      <TouchableOpacity style={[commonStyles.row, commonStyles.center]}>
        <FontAwesome5 name="piggy-bank" size={24} color={colors.error} />
        <Text
          style={[commonStyles.whiteColor, commonStyles.fontBold, styles.name]}
        >
          DEPOSIT
        </Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={[commonStyles.row, commonStyles.center]}>
        <MaterialCommunityIcons
          name="home-currency-usd"
          size={24}
          color={colors.success}
        />
        <Text
          style={[commonStyles.whiteColor, commonStyles.fontBold, styles.name]}
        >
          WITHDRAW
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(WalletTransfer);

const styles = StyleSheet.create({
  walletTransfer: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 50,
  },
  name: { marginLeft: 4 },
  separator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.exchange,
  },
});
