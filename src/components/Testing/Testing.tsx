import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useMemo } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useTheme, MD3Theme } from 'react-native-paper';

import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const getStyles = (theme: MD3Theme) => {
  return StyleSheet.create({
    testview: {
      height: 100,
      backgroundColor: theme.colors.primary,
    },
  });
};

export const Testing = () => {
  const width = useSharedValue(100);
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <View>
      <Text>Welcome to Testing!</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Text>Some text</Text>
      <FAIcon name="rocket" size={30} color="#900" />
      <FontAwesome name="rocket" size={30} color="#900" />
      <Animated.View
        style={[
          styles.testview,
          {
            width: width as any,
          },
        ]}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
};
