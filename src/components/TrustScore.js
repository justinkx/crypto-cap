import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { commonStyles, colors } from '../styles/CommonStyles';

const WIDTH = 120;

const TrustScore = ({ trust_score }) => {
  return (
    <View>
      <Text style={[commonStyles.fontSemibold, styles.score]}>
        Trust Score: {trust_score}
      </Text>
      <View style={styles.trustContainer}>
        <View style={[styles.trust, { width: (trust_score / 10) * WIDTH }]} />
      </View>
    </View>
  );
};

export default memo(TrustScore);

const styles = StyleSheet.create({
  trustContainer: {
    width: WIDTH,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#0000001a',
    position: 'relative',
  },
  trust: {
    backgroundColor: colors.success,
    position: 'absolute',
    height: 16,
    borderRadius: 8,
  },
  score: {
    fontSize: 13,
    color: colors.black,
    marginBottom: 5,
  },
});
