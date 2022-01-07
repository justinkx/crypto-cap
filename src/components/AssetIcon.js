import React, { useState, useCallback, memo } from 'react';
import { Image } from 'react-native';

import { CRYPTO_ASSET_SMALL } from '../utils/api';

const AssetIcon = ({ symbol, iconStyle, url }) => {
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
          source={{ uri: url ?? CRYPTO_ASSET_SMALL(symbol) }}
          onError={handleOnError}
        />
      )}
    </>
  );
};

export default memo(AssetIcon);
