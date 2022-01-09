import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import { NumbFormat } from '../../utils/helpers';
import { commonStyles, colors } from '../../styles/CommonStyles';
import Rank from '../Rank';

const Header = ({
  name,
  image,
  url,
  trade_volume_24h_btc,
  trust_score_rank,
}) => {
  const openInfo = useCallback(() => Linking.openURL(url), [url]);

  return (
    <View
      style={[commonStyles.row, commonStyles.spaceBetween, styles.container]}
    >
      <View style={commonStyles.row}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={commonStyles.page}>
          <Text style={[styles.name, commonStyles.fontBold]}>{name}</Text>
          <TouchableOpacity style={styles.info} onPress={openInfo}>
            <MaterialIcons name="info" size={14} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={commonStyles.columnFlexEnd}>
        <Text style={[styles.volume, commonStyles.fontSemibold]}>
          Vol :{' '}
          <Text style={[styles.vol, commonStyles.fontBold]}>
            {NumbFormat({ number: trade_volume_24h_btc })} BTC
          </Text>
        </Text>
        <Rank rank={trust_score_rank} />
      </View>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  name: {
    color: colors.white,
    fontSize: 15,
    marginBottom: 4,
  },
  volume: {
    color: colors.primaryTint,
    fontSize: 13,
  },
  vol: {
    color: colors.white,
    fontSize: 13,
  },
});
