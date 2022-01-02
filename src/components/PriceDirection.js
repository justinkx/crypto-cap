import React, { memo, useRef, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../styles/CommonStyles';

const PriceDirection = memo(({ price }) => {
  const lastPriceRef = useRef(0);

  const { symbol = '', textStyle = {} } = useMemo(() => {
    if (price && lastPriceRef?.current !== price) {
      if (price > lastPriceRef.current) {
        lastPriceRef.current = price;
        return {
          symbol: 'md-caret-up-sharp',
          textStyle: styles.up,
        };
      } else if (price < lastPriceRef.current) {
        lastPriceRef.current = price;
        return {
          symbol: 'md-caret-down-sharp',
          textStyle: styles.down,
        };
      }
    }
    return { symbol: '', textStyle: {} };
  }, [price]);

  return (
    <View>
      <Ionicons name={symbol} style={[textStyle, styles.direction]} />
    </View>
  );
});

export default memo(PriceDirection);

const styles = StyleSheet.create({
  up: { color: colors.success },
  down: { color: colors.error },
  direction: {
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
