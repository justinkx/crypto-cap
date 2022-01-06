import React, { memo, useCallback } from 'react';
import { FlatList } from 'react-native';

import Page from '../components/Page';
import { commonStyles } from '../styles/CommonStyles';
import { transactions } from '../utils/data';
import TransactionItem from '../components/TransactionItem';

const Transactions = () => {
  const keyExtractor = useCallback((_, index) => `${index}`, []);

  const renderItem = useCallback(
    ({ item }) => <TransactionItem {...item} />,
    []
  );

  return (
    <Page scroll={false}>
      <FlatList
        data={transactions}
        style={commonStyles.flex}
        contentContainerStyle={commonStyles.page}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Page>
  );
};

export default memo(Transactions);
