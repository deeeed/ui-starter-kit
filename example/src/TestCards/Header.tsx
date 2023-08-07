import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Spacer } from '../components/Spacer';
import { Colors } from 'example/assets/Colors';

type HeaderProps = {
  totalWords: number;
  completedWords: number;
};

const Header = ({ totalWords, completedWords }: HeaderProps) => {
  const prgressPercentage = (completedWords / totalWords) * 100;
  return (
    <View>
      <Text style={styles.title}>{'Card'}</Text>
      <Spacer vertical={2} />
      <View style={styles.progressIndicationContainer}>
        <Text
          style={styles.progressText}
        >{`${completedWords}/${totalWords} Words`}</Text>
        <Spacer horizontal={4} />
        <View style={styles.progressBarContainer}>
          <View
            style={[styles.progressBar, { width: `${prgressPercentage}%` }]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },
  progressIndicationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    color: Colors.secondary,
  },
  progressBarContainer: {
    width: 186,
    borderRadius: 5,
    height: 10,
    backgroundColor: Colors.tertiary,
  },
  progressBar: {
    position: 'absolute',
    backgroundColor: Colors.green,
    height: 10,
    borderRadius: 5,
  },
});

export { Header };
