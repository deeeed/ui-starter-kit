import { Colors } from 'example/assets/Colors';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Spacer } from '../components/Spacer';
import { Divider } from '../components/Divider';

type TestInfoProps = {
  info: { label: string; value: string }[];
};

const SpacerBetweenUI = () => <Spacer vertical={3} />;

const TestInfo = ({ info }: TestInfoProps) => (
  <View style={styles.container}>
    <Text style={styles.titleText}>{'Details'}</Text>
    <Spacer vertical={4} />
    {info.map(({ label, value }, index) => (
      <React.Fragment key={index}>
        <SpacerBetweenUI />
        <Text style={styles.labelText}>{label}</Text>
        <SpacerBetweenUI />
        <Text style={styles.valueText}>{value}</Text>
        <SpacerBetweenUI />
        <Divider />
      </React.Fragment>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 16,
  },
  titleText: { fontSize: 16, color: Colors.purple, fontWeight: '600' },
  labelText: { fontSize: 16, fontWeight: '600', color: Colors.black },
  valueText: { fontSize: 14, color: Colors.lightGrey },
});

export { TestInfo };
export type { TestInfoProps };
