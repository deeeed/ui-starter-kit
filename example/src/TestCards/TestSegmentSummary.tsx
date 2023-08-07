import { Colors } from 'example/assets/Colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spacer } from '../components';

type TestSegmentProps = {
  type: 'learning' | 'reviewing' | 'mastered';
  count: number;
};

type TestSegmentSummaryProps = {
  learningCount: number;
  reviewingCount: number;
  masteredCount: number;
};

const TestSegment = ({ type, count }: TestSegmentProps) => {
  const color =
    type === 'learning'
      ? Colors.purple
      : type === 'reviewing'
      ? Colors.secondary
      : Colors.green;
  const label =
    type === 'learning'
      ? 'Learning'
      : type === 'reviewing'
      ? 'Reviewing'
      : 'Mastered';

  return (
    <View style={styles.testSegmentContainer}>
      <View style={[styles.colorBullet, { backgroundColor: color }]} />
      <Spacer vertical={5} />
      <Text style={styles.label}>{label}</Text>
      <Spacer vertical={5} />
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

const TestSegmentSummary = ({
  learningCount,
  reviewingCount,
  masteredCount,
}: TestSegmentSummaryProps) => {
  return (
    <View style={styles.container}>
      <TestSegment type="learning" count={learningCount} />
      <Spacer horizontal={20} />
      <TestSegment type="reviewing" count={reviewingCount} />
      <Spacer horizontal={20} />
      <TestSegment type="mastered" count={masteredCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  colorBullet: {
    width: 11,
    height: 11,
    borderRadius: 8.5,
  },
  label: {
    fontSize: 10,
    color: Colors.midGrey,
    fontWeight: '400',
  },
  count: { fontSize: 20 },
  testSegmentContainer: {
    alignItems: 'center',
  },
});

export { TestSegmentSummary };
