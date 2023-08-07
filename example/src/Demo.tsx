/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import { BottomNavigation, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ExampleList from './ExampleList';
import { Button } from 'siteed-ui-starter-kit';
import { StackNavigationProp } from '@react-navigation/stack';

type TabParamList = {
  'UI Demo': undefined;
  'Native Paper': undefined;
};

type ScreenProps = {
  navigation: StackNavigationProp<{ [key: string]: undefined }>;
};

const Tab = createBottomTabNavigator<TabParamList>();

function HomeScreen({ navigation }: ScreenProps) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Test your lib components here</Text>
      <Button onPress={() => navigation.navigate('BeginTest')}>
        Go To Flash Cards
      </Button>
    </View>
  );
}

export default function Demo() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) =>
            descriptors[route.key]?.options.tabBarIcon?.({
              focused,
              color,
              size: 24,
            }) || null
          }
          getLabelText={({ route }) => descriptors[route.key]?.route.name}
        />
      )}
    >
      <Tab.Screen
        name="UI Demo"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Native Paper"
        component={ExampleList}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

Demo.title = 'Bottom Navigation Bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
