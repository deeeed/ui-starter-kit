import { Colors } from 'example/assets/Colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { Spacer } from '../components';

type CardProps = {
  label: string;
  subLabel: string;
  isExpanded?: boolean;
  expandedText: { label: string; value: string }[];
  onPressCard: () => void;
};

const Card = ({
  label,
  subLabel,
  isExpanded = false,
  expandedText,
  onPressCard,
}: CardProps) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.6}
      onPress={onPressCard}
    >
      <Surface style={styles.cardSurface} elevation={4}>
        <View
          style={[styles.container, { height: isExpanded ? '80%' : '100%' }]}
        >
          <Text style={styles.cardText}>{label}</Text>
          {isExpanded ? (
            <>
              <Spacer vertical={10} />
              <Text style={styles.subLabel}>{subLabel}</Text>
            </>
          ) : null}
        </View>
        {isExpanded ? (
          <View style={styles.hiddenTextContainer}>
            {expandedText.map(({ label, value }) => (
              <View style={styles.hiddenRowContainer}>
                <Text style={styles.label}>{`${label}: `}</Text>
                <Text style={styles.value}>{value}</Text>
              </View>
            ))}
          </View>
        ) : null}
      </Surface>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.purple,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: '70%',
    borderRadius: 40,
  },
  cardSurface: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    backgroundColor: Colors.white,
  },
  cardText: {
    fontSize: 56,
    color: Colors.white,
    fontWeight: '700',
  },
  subLabel: {
    fontSize: 20,
    color: Colors.lightPurple,
  },
  hiddenTextContainer: {
    position: 'absolute',
    bottom: '5%',
    left: '7%',
  },
  hiddenRowContainer: {
    flexDirection: 'row',
  },
  label: {
    color: Colors.purple,
  },
  value: {
    color: Colors.secondary,
  },
});

export { Card };
