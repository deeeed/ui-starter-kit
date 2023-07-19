import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export const decorators = [
  // Using a decorator to apply padding for every story
  (StoryFn: any) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      // console.log(`loading fonts..`);
      setLoaded(true)
    })

    if(!loaded) {
      return (<Text>Loading...</Text>)
    }

    return <PaperProvider theme={theme}>
      <View style={{ flex: 1, padding: 20 }}>
        <StoryFn />
      </View>
    </PaperProvider>
  },
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
