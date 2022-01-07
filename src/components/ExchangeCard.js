import React, { memo, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  useWindowDimensions,
} from 'react-native';

import {
  commonStyles,
  colors,
  FONT_BOLD,
  FONT_SEMI_BOLD,
} from '../styles/CommonStyles';
import TrustScore from './TrustScore';
import ScrollRow from './ScrollRow';
import { NumbFormat } from '../utils/helpers';

const ExchangeCard = ({
  name,
  year_established,
  country,
  image,
  trust_score,
  trust_score_rank,
  trade_volume_24h_btc,
}) => {
  const { width } = useWindowDimensions();

  const handleClick = useCallback(() => {}, []);
  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator
        bounces
        horizontal
        snapToAlignment={'center'}
        scrollEventThrottle={100}
      >
        <ScrollRow onClick={handleClick} rowStyle={[commonStyles.row]}>
          <View style={[commonStyles.row, { width: width / 1.7 }]}>
            <Text style={styles.rank}>{trust_score_rank}</Text>
            <Image source={{ url: image }} style={styles.image} />
            <View>
              <Text style={[commonStyles.fontBold, styles.name]}>{name}</Text>
              <Text style={styles.year}>Year Est: {year_established}</Text>
            </View>
          </View>
          <View style={{ width: width / 2 }}>
            <Text style={[styles.volume, { paddingBottom: 4 }]}>
              Country: {country}
            </Text>
            <Text style={styles.volume}>
              Volume: {NumbFormat({ number: trade_volume_24h_btc })} BTC
            </Text>
          </View>
          <View style={{ width: width / 2 }}>
            <TrustScore trust_score={trust_score} />
          </View>
        </ScrollRow>
      </ScrollView>
    </View>
  );
};

export default memo(ExchangeCard);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    height: 60,
    borderRadius: 10,
    backgroundColor: colors.white,
    flex: 1,
    paddingRight: 5,
  },
  rank: {
    fontSize: 14,
    color: colors.black,
    fontFamily: FONT_SEMI_BOLD,
  },
  image: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  name: {
    color: colors.primary,
    fontSize: 15,
    paddingBottom: 2,
  },
  year: {
    fontFamily: FONT_SEMI_BOLD,
    color: colors.black,
    fontSize: 14,
  },
  volume: {
    fontFamily: FONT_SEMI_BOLD,
    color: colors.black,
    fontSize: 13,
  },
});
