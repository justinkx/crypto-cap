import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { balance } from '../utils/data';

import Page from '../components/Page';
import { commonStyles } from '../styles/CommonStyles';

const Wallets = () => {
  return (
    <Page scroll={false} padding>
      <Text>Wallets</Text>
    </Page>
  );
};

export default memo(Wallets);
