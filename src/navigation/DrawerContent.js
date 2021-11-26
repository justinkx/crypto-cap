import React, { memo } from 'react';
import { ImageBackground } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { commonStyles } from '../styles/CommonStyles';

const BACKGROUND_IMAGE = require('../../assets/crypto-cap-bg.png');

const DrawerContent = (props) => {
  return (
    <ImageBackground
      source={BACKGROUND_IMAGE}
      style={commonStyles.flex}
      resizeMode="stretch"
    >
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

export default memo(DrawerContent);
