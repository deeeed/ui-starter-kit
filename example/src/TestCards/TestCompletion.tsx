import { useNavigation } from '@react-navigation/native';
import { Colors } from 'example/assets/Colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Surface } from 'react-native-paper';
import { Spacer } from '../components';

const TestCompletion = () => {
  const navigation = useNavigation();
  return (
    <>
      <Surface style={styles.container}>
        <Text style={styles.label}>
          {
            'Awesome. You have completed the words test. Go back to the Home to get more tests done.'
          }
        </Text>
      </Surface>
      <Spacer vertical={16} />
      <TouchableOpacity
        style={styles.ctaButton}
        // @ts-ignore
        onPress={() => navigation.navigate('Demo')}
      >
        <Text style={styles.ctaLabel}>{'Go Home'}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '80%',
  },
  label: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.secondary,
  },
  ctaButton: {
    height: 60,
    alignItems: 'center',
    backgroundColor: Colors.purple,
    borderRadius: 10,
    justifyContent: 'center',
    padding: 16,
  },
  ctaLabel: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: '600',
  },
});

export { TestCompletion };
