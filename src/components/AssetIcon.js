import React, { useState, useCallback, memo } from 'react';
import { StyleSheet, Image } from 'react-native';

import { CRYPTO_ASSET_SMALL } from '../utils/api';

const AssetIcon = ({ symbol, iconStyle }) => {
  const [loadError, setLoadError] = useState(false);
  const handleOnError = useCallback(() => setLoadError(true), []);
  return (
    <>
      {loadError ? (
        <Image
          style={iconStyle}
          source={{ uri: 'https://coincap.io/static/logo_mark.png' }}
        />
      ) : (
        <Image
          style={iconStyle}
          source={{ uri: CRYPTO_ASSET_SMALL(symbol) }}
          onError={handleOnError}
        />
      )}
    </>
  );
};

export default memo(AssetIcon);

const styles = StyleSheet.create({});
