import React from 'react';
import type { Preview, Decorator } from "@storybook/react";
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { View, Text } from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators: Decorator[] = [
  // Using a decorator to apply padding for every story
  (StoryFn: any) => (
    <PaperProvider theme={theme}>
      <View style={{flex:1, padding:8}}>
        <StoryFn />
      </View>
    </PaperProvider>
  ),
];

export default preview;
