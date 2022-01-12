import React, { memo, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { commonStyles } from '../../styles/CommonStyles';
import StatusItem from './StatusItem';
import { listEmptyComponent } from '../../utils/helpers';

const StatusUpdates = ({ statusUpdates = [], url = '' }) => {
  const renderItem = useCallback(
    ({ item }) => <StatusItem {...item} url={url} />,
    [url]
  );

  const keyExtractor = useCallback((_, index) => `${index}`, []);

  return (
    <FlatList
      style={commonStyles.flex}
      contentContainerStyle={styles.flatList}
      data={statusUpdates}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={listEmptyComponent}
      bounces
    />
  );
};

export default memo(StatusUpdates);

const styles = StyleSheet.create({
  flatList: {
    padding: 15,
  },
});
