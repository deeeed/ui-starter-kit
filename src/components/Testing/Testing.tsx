import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, View } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Testing = () => {
  return (
    <View>
      <Text>Welcome to Testing!</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Text>Some text</Text>
      <FAIcon name="rocket" size={30} color="#900" />
      <FontAwesome name="rocket" size={30} color="#900" />
    </View>
  );
};
