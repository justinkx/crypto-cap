import React, { memo, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, shallowEqual } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import { commonStyles, colors } from '../../styles/CommonStyles';
import { NumbFormat } from '../../utils/helpers';
import ScrollRow from '../ScrollRow';
import {
  EXCHANGE_DETAILS_SCREEN,
  EXCHANGE_STACK,
} from '../../navigation/NavConstants';
import { getExchanges } from '../../store/selectors/exchangeSelector';

const TickerItem = ({
  base,
  target,
  market: { name = '', identifier = '' },
  last,
  volume,
  trade_url,
}) => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const [exchange] = useSelector((state) => getExchanges(state)([identifier]));

  const handleClick = useCallback(() => {
    navigation.navigate(EXCHANGE_STACK, {
      screen: EXCHANGE_DETAILS_SCREEN,
      params: {
        title: name,
        id: identifier,
      },
      initial: true,
    });
  }, [navigation, name, identifier]);

  const openInfo = useCallback(() => Linking.openURL(trade_url), [trade_url]);

  return (
    <View style={[styles.container]}>
      <ScrollView
        showsHorizontalScrollIndicator
        bounces
        horizontal
        snapToAlignment={'start'}
        scrollEventThrottle={100}
      >
        <ScrollRow
          onClick={handleClick}
          rowStyle={[commonStyles.row, styles.button]}
        >
          <View style={[commonStyles.row, { width: 0.45 * width }]}>
            <Image
              source={{
                uri: exchange?.image,
              }}
              style={styles.image}
            />
            <View style={commonStyles.flex}>
              <Text
                ellipsizeMode={'tail'}
                textBreakStrategy="highQuality"
                style={[commonStyles.fontBold, styles.name]}
              >
                {name}
              </Text>
              <Text style={[commonStyles.fontSemibold, styles.rank]}>
                Rank: {exchange?.trust_score_rank}
              </Text>
            </View>
          </View>
          <View style={[{ width: width * 0.3 }]}>
            <Text style={[commonStyles.fontBold, styles.pair]}>
              {base}/{target}
            </Text>
            <Text style={styles.price}>
              Price: ${parseFloat(last).toFixed(0)}
            </Text>
          </View>
          <View style={[{ width: 0.35 * width }]}>
            <Text style={[commonStyles.fontBold, styles.pair]}>
              Volume: ${NumbFormat({ number: volume })}
            </Text>
            <TouchableOpacity style={styles.info} onPress={openInfo}>
              <MaterialIcons name="info" size={16} color={colors.primary} />
            </TouchableOpacity>
          </View>
          <View style={[{ width: 0.2 * width }]}>
            <TouchableOpacity style={styles.tradeButton}>
              <Text style={[styles.trade, commonStyles.fontBold]}>Trade</Text>
            </TouchableOpacity>
          </View>
        </ScrollRow>
      </ScrollView>
    </View>
  );
};

export default memo(TickerItem);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    padding: 10,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 10,
    marginRight: 10,
  },
  name: {
    color: colors.primary,
    fontSize: 14,
    flex: 1,
    paddingRight: 15,
  },
  rank: {
    color: colors.black,
    fontSize: 12,
    marginTop: 2,
  },
  pair: {
    fontSize: 15,
    color: colors.black,
  },
  price: {
    fontSize: 13,
    paddingTop: 2,
  },
  info: { marginTop: 2 },
  tradeButton: {
    backgroundColor: colors.success,
    width: 80,
    height: 35,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trade: {
    color: colors.white,
    fontSize: 14,
  },
});
