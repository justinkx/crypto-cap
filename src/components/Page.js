import React, { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';

import { commonStyles } from '../styles/CommonStyles';

const Page = ({ children, padding = false, safeAreaView = false }) => {
  return safeAreaView ? (
    <SafeAreaView style={commonStyles.flex}>
      <ScrollView
        style={commonStyles.flex}
        contentContainerStyle={padding && commonStyles.page}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View style={commonStyles.flex}>
      <ScrollView
        style={commonStyles.flex}
        contentContainerStyle={padding && commonStyles.page}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default memo(Page);
