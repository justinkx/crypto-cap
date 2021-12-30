import React, { useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from 'react-native';

import { commonStyles, colors } from '../../styles/CommonStyles';
import { balance } from '../../utils/data';
import { CRYPTO_ASSET_SMALL } from '../../utils/api';
import { chartColor } from '../../utils/helpers';

const BalanceWallets = () => {
  const { width } = useWindowDimensions();

  const renderItem = useCallback(
    ({ item, index }) => (
      <TouchableOpacity
        style={[
          styles.cardContainer,
          { width: width / 3 - 20, height: width / 3 - 20 },
        ]}
      >
        <View
          style={[
            commonStyles.flex,
            commonStyles.spaceBetween,
            commonStyles.boxShadow,
          ]}
        >
          <View style={[commonStyles.row, commonStyles.spaceBetween]}>
            <Image
              style={styles.icon}
              source={{ uri: CRYPTO_ASSET_SMALL(item?.token) }}
            />
            <View style={[commonStyles.row, commonStyles.center]}>
              <View
                style={[styles.badge, { backgroundColor: chartColor[index] }]}
              />
              <Text style={styles.volume}>{item?.volume}</Text>
            </View>
          </View>
          <View>
            <Text style={[commonStyles.fontBold, styles.balance]}>
              {item?.balance}{' '}
              <Text
                style={[commonStyles.primaryTintColor, commonStyles.fontBold]}
              >
                {item?.token}
              </Text>
            </Text>
            <Text style={[commonStyles.primaryTintColor, styles.equivalentUsd]}>
              {item?.equivalentUsd} USD
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    ),
    [width]
  );

  const keyExtractor = useCallback((item) => item.name, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={balance}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
      />
    </View>
  );
};

export default BalanceWallets;

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
  cardContainer: {
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: colors.primaryFade,
    padding: 8,
  },
  card: {
    justifyContent: 'flex-start',
  },
  icon: {
    width: 22,
    height: 22,
  },
  volume: {
    color: colors.white,
    fontSize: 14,
  },
  badge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },

  balance: {
    fontSize: 14,
    color: colors.white,
  },
  equivalentUsd: {
    fontSize: 12,
  },
});
