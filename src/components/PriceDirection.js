import React, { memo, useRef, useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors } from '../styles/CommonStyles';

const PriceDirection = memo(({ price }) => {
  const lastPriceRef = useRef(0);

  const { symbol = '', textStyle = {} } = useMemo(() => {
    if (price && lastPriceRef?.current !== price) {
      if (price > lastPriceRef.current) {
        lastPriceRef.current = price;
        return {
          symbol: '\u25B2',
          textStyle: styles.up,
        };
      } else if (price < lastPriceRef.current) {
        lastPriceRef.current = price;
        return {
          symbol: '\u25BC',
          textStyle: styles.down,
        };
      }
    }
    return { symbol: '', textStyle: {} };
  }, [price]);

  return <Text style={[textStyle, styles.direction]}>{symbol}</Text>;
});

export default memo(PriceDirection);

const styles = StyleSheet.create({
  up: { color: colors.success },
  down: { color: colors.error },
  direction: {
    fontSize: 14,
  },
});
