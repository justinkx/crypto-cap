import React, { memo, useState, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector, shallowEqual } from 'react-redux';
import Checkbox from 'expo-checkbox';

import Page from '../components/Page';
import { commonStyles, colors } from '../styles/CommonStyles';
import { balance, allBalanceCoins } from '../utils/data';
import { pickCryptoAssets } from '../store/selectors/assetSelector';

const Wallets = () => {
  const [isMarketTicker, setMarketTicker] = useState(true);

  const balanceTickers = useSelector(
    (state) => pickCryptoAssets(state)(allBalanceCoins),
    shallowEqual
  );

  const handleCheckbox = useCallback(
    () => setMarketTicker((prev) => !prev),
    []
  );

  return (
    <Page scroll={false} padding>
      <View style={[styles.balanceView, commonStyles.row, commonStyles.center]}>
        <View style={[commonStyles.row, commonStyles.center]}>
          <Text>Total</Text>
          <FontAwesome name="dollar" size={24} color={colors.white} />
        </View>
        <View style={styles.checkBoxView}>
          <TouchableOpacity style={commonStyles.row} onPress={handleCheckbox}>
            <Checkbox
              style={styles.checkbox}
              value={isMarketTicker}
              onValueChange={setMarketTicker}
              color={isMarketTicker ? colors.success : colors.white}
            />
            <Text style={[styles.marketTicker, commonStyles.fontBold]}>
              Market
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Page>
  );
};

export default memo(Wallets);

const styles = StyleSheet.create({
  balanceView: { marginVertical: 25, position: 'relative', height: 150 },
  total: {},
  checkBoxView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  checkbox: {
    marginRight: 5,
  },
  marketTicker: {
    fontSize: 14,
    color: colors.white,
  },
});
