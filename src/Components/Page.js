import React, { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../styles/CommonStyles';

const Page = ({ children, padding = false }) => {
  return (
    <SafeAreaView style={[commonStyles.flex, padding && commonStyles.page]}>
      {children}
    </SafeAreaView>
  );
};

export default memo(Page);
