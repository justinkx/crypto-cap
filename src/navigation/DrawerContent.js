import React, { memo, useEffect } from 'react';
import { ImageBackground, View, Image, StyleSheet, Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';

import { commonStyles, colours } from '../styles/CommonStyles';
import { userData } from '../utils/data';
import { getAssets } from '../store/actions/assetActions';

const BACKGROUND_IMAGE = require('../../assets/crypto-cap-bg.png');
const AVATAR_SIZE = 50;

const DrawerContent = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssets());
  }, [dispatch]);
  return (
    <ImageBackground
      source={BACKGROUND_IMAGE}
      style={commonStyles.flex}
      resizeMode="stretch"
    >
      <DrawerContentScrollView {...props}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: userData.image }} style={styles.avatar} />
          <Text style={styles.name}>{userData.name}</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 1,
  },
  name: {
    color: colours.white,
    paddingLeft: 15,
  },
});
export default memo(DrawerContent);
