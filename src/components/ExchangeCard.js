import React, { memo, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import {
  commonStyles,
  colors,
  FONT_BOLD,
  FONT_SEMI_BOLD,
} from '../styles/CommonStyles';

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
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator>
          <View
            style={[
              commonStyles.row,
              commonStyles.center,
              commonStyles.spaceBetween,
            ]}
          >
            <View style={[commonStyles.row, commonStyles.center]}>
              <Text style={styles.rank}>{trust_score_rank}</Text>
              <Image source={{ url: image }} style={styles.image} />
              <View>
                <Text style={[commonStyles.fontBold, styles.name]}>{name}</Text>
                <Text style={styles.year}>Year Est: {year_established}</Text>
              </View>
            </View>
            <View></View>
          </View>
        </ScrollView>
      </TouchableOpacity>
    </View>
  );
};

export default memo(ExchangeCard);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    height: 60,
    borderRadius: 10,
    padding: 10,
    flex: 1,
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
    fontSize: 16,
  },
  year: {
    fontFamily: FONT_SEMI_BOLD,
    color: colors.black,
    fontSize: 14,
  },
});
