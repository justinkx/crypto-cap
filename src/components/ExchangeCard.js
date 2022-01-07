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

const ExchangeCard = ({
  id,
  name,
  year_established,
  country,
  image,
  trust_score,
  trust_score_rank,
  trade_volume_24h_btc,
  trade_volume_24h_btc_normalized,
}) => {
  const { width } = useWindowDimensions();

  const handleClick = useCallback(() => {}, []);
  return (
    <View style={styles.container}>
      <ScrollView
        bounces
        horizontal
        snapToInterval={width}
        snapToAlignment={'start'}
        scrollEventThrottle={100}
        showsHorizontalScrollIndicator
        pagingEnabled
      >
        <ScrollRow
          onClick={handleClick}
          width={width}
          rowStyle={[commonStyles.row]}
        >
          <View style={[commonStyles.row, styles.nameView]}>
            <Text style={styles.rank}>{trust_score_rank}</Text>
            <Image source={{ url: image }} style={styles.image} />
            <View>
              <Text style={[commonStyles.fontBold, styles.name]}>{name}</Text>
              <Text style={styles.year}>Year Est: {year_established}</Text>
            </View>
          </View>
          <View style={styles.trustView}>
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
  },
  year: {
    fontFamily: FONT_SEMI_BOLD,
    color: colors.black,
    fontSize: 14,
  },
  nameView: { width: '60%' },
  trustView: {
    width: '40%',
    marginHorizontal: 15,
  },
});
