import React, { memo, useCallback } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { LineChart } from 'react-native-svg-charts';
import _toLower from 'lodash/toLower';
import _toUpper from 'lodash/toUpper';

import {
  commonStyles,
  colors,
  FONT_BOLD,
  FONT_MEDIUM,
} from '../../styles/CommonStyles';
import { getCryptoAssets } from '../../store/selectors/assetSelector';

const BalanceCoin = ({ token, isMarketTicker, name, balance }) => {
  const [coinDetails] = useSelector(
    (state) => getCryptoAssets(state)(_toLower(name)),
    shallowEqual
  );

  return (
    <View style={styles.container}>
      <View
        style={[
          commonStyles.row,
          commonStyles.center,
          commonStyles.spaceBetween,
        ]}
      >
        <View style={commonStyles.row}>
          <Image style={styles.image} source={{ uri: coinDetails?.image }} />
          <View>
            <Text style={[commonStyles.fontBold, styles.name]}>
              {coinDetails?.name}
            </Text>
            <Text style={[commonStyles.fontSemibold, styles.symbol]}>
              {_toUpper(coinDetails?.symbol)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(BalanceCoin);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    height: 60,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: 35,
    height: 35,
    marginRight: 6,
  },
  name: {
    fontSize: 15,
    color: colors.black,
  },
  symbol: {
    fontSize: 13,
    marginTop: 3,
    color: colors.primary,
  },
});
