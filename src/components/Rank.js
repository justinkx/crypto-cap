import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { commonStyles, colors } from '../styles/CommonStyles';

const Rank = ({ rank }) => {
  return (
    <View style={styles.shield}>
      <MaterialCommunityIcons name="shield" size={20} color={colors.wallet} />
      <Text style={[commonStyles.fontBold, styles.market_cap_rank]}>
        {rank}
      </Text>
    </View>
  );
};

export default memo(Rank);

const styles = StyleSheet.create({
  shield: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  market_cap_rank: {
    position: 'absolute',
    color: colors.white,
    fontSize: 10,
  },
});
