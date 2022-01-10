import React, { memo, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import _get from 'lodash/get';
import * as Linking from 'expo-linking';

import { commonStyles, colors } from '../../styles/CommonStyles';

const StatusItem = ({ description, user, project = {}, user_title, url }) => {
  const large = _get(project, 'image.large', '');
  const { width } = useWindowDimensions();

  const onPress = useCallback(() => Linking.openURL(url), [url]);

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={[commonStyles.row, commonStyles.center, styles.button]}
        onPress={onPress}
      >
        <Image source={{ uri: large }} style={styles.image} />
        <View style={[styles.contentView, { width: width - 130 }]}>
          <Text style={[styles.title, commonStyles.fontBold]}>
            {user_title}
          </Text>
          <Text style={styles.user}>: {user}</Text>
          <Text
            style={[styles.description, commonStyles.fontSemibold]}
            numberOfLines={2}
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
  },
  contentView: {
    paddingLeft: 20,
  },
  title: {
    color: colors.primary,
    fontSize: 14,
  },
  description: {
    fontSize: 12,
    flex: 1,
    flexWrap: 'wrap',
  },
  user: {
    marginVertical: 4,
    fontSize: 11,
    color: colors.black,
    opacity: 0.7,
  },
});
