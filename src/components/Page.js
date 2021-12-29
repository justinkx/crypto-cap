import React, { memo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';

import { commonStyles } from '../styles/CommonStyles';

const Page = ({
  children,
  padding = false,
  safeAreaView = false,
  scroll = true,
  containerStyle = {},
}) => {
  return safeAreaView ? (
    <SafeAreaView style={[commonStyles.flex, containerStyle]}>
      {scroll ? (
        <ScrollView
          style={commonStyles.flex}
          contentContainerStyle={padding && commonStyles.page}
        >
          {children}
        </ScrollView>
      ) : (
        <>{children}</>
      )}
    </SafeAreaView>
  ) : (
    <View style={[commonStyles.flex, containerStyle]}>
      {scroll ? (
        <ScrollView
          style={commonStyles.flex}
          contentContainerStyle={padding && commonStyles.page}
        >
          {children}
        </ScrollView>
      ) : (
        <>{children}</>
      )}
    </View>
  );
};

export default memo(Page);
