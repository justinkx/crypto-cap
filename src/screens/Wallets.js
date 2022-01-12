import React, { memo, useState, useCallback, useMemo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector, shallowEqual } from 'react-redux';
import Checkbox from 'expo-checkbox';

import Page from '../components/Page';
import { commonStyles, colors } from '../styles/CommonStyles';
import { balance, allBalanceCoins } from '../utils/data';
import { pickCryptoAssets } from '../store/selectors/assetSelector';
import { calculateBalanceTotals } from '../helpers/price';
import BalanceCoin from '../components/Wallet/BalanceCoin';

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

  const balanceTotal = useMemo(() => calculateBalanceTotals(balance), []);

  const balanceMarketTotal = useMemo(
    () => calculateBalanceTotals(balance, balanceTickers),
    [balanceTickers]
  );

  const keyExtractor = useCallback((_, index) => `${index}`, []);

  const renderItem = useCallback(
    ({ item }) => <BalanceCoin {...item} isMarketTicker={isMarketTicker} />,
    [isMarketTicker]
  );

  return (
    <Page scroll={false}>
      <View style={[styles.balanceView, commonStyles.row, commonStyles.center]}>
        <View style={[commonStyles.row, commonStyles.center]}>
          <Text style={[styles.balanceTotal, commonStyles.fontBold]}>
            {isMarketTicker ? balanceMarketTotal : balanceTotal}
          </Text>
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
      <FlatList
        style={commonStyles.flex}
        data={balance}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.flatList}
        bounces
        zoomable
      />
      <View style={[styles.transferView, commonStyles.flex]}></View>
    </Page>
  );
};

export default memo(Wallets);

const styles = StyleSheet.create({
  balanceView: {
    margin: 20,
    position: 'relative',
    height: 100,
  },
  checkBoxView: {
    position: 'absolute',
    bottom: -10,
    left: 0,
  },
  checkbox: {
    marginRight: 5,
  },
  marketTicker: {
    fontSize: 14,
    color: colors.white,
  },
  balanceTotal: {
    color: colors.white,
    fontSize: 22,
    paddingRight: 4,
  },
  flatList: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  transferView: {
    maxHeight: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
});
