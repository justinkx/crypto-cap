import React, { memo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import _get from 'lodash/get';

import {
  commonStyles,
  colors,
  FONT_SEMI_BOLD,
  FONT_BOLD,
} from '../../styles/CommonStyles';

const StatusItem = ({ description, category, project = {}, user_title }) => {
  const large = _get(project, 'image.large', '');

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={[commonStyles.row, commonStyles.center, styles.button]}
      >
        <Image source={{ uri: large }} style={styles.image} />
        <View style={styles.contentView}>
          <Text style={[styles.title, commonStyles.fontBold]}>
            {user_title}
          </Text>
          <Text
            style={[styles.description, commonStyles.fontSemibold]}
            numberOfLines={3}
            ellipsizeMode={'tail'}
          >
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(StatusItem);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    height: 100,
    borderRadius: 10,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    justifyContent: 'space-between',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
  },
  contentView: {
    flexWrap: 'wrap',
  },
  title: {
    color: colors.primary,
    fontSize: 14,
  },
  description: {
    fontSize: 12,
  },
});
