import React, { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector, shallowEqual } from 'react-redux';

import Page from '../components/Page';
import { commonStyles, colors } from '../styles/CommonStyles';
import { balance, allBalanceCoins } from '../utils/data';
import { pickCryptoAssets } from '../store/selectors/assetSelector';

const Wallets = () => {
  const balanceTickers = useSelector(
    (state) => pickCryptoAssets(state)(allBalanceCoins),
    shallowEqual
  );

  return (
    <Page scroll={false} padding>
      <View style={[styles.balanceView, commonStyles.row, commonStyles.center]}>
        <View style={[commonStyles.row, commonStyles.center]}>
          <Text>Total</Text>
          <FontAwesome name="dollar" size={24} color={colors.white} />
        </View>
      </View>
    </Page>
  );
};

export default memo(Wallets);

const styles = StyleSheet.create({
  balanceView: { marginVertical: 25 },
  total: {},
});
