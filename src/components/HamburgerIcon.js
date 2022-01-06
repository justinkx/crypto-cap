import React, { memo, useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../styles/CommonStyles';

const HamburgerIcon = ({ size = 26 }) => {
  const navigation = useNavigation();
  const handleToggle = useCallback(
    () => navigation.dispatch(DrawerActions.toggleDrawer()),
    [navigation]
  );

  return (
    <TouchableOpacity style={styles.container} onPress={handleToggle}>
      <MaterialIcons name="menu" size={size} color={colors.white} />
    </TouchableOpacity>
  );
};

export default memo(HamburgerIcon);

const styles = StyleSheet.create({
  container: { marginLeft: 15 },
});
