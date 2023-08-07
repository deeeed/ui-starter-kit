import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Spacer } from '../components';

type CardButtonProps = {
  iconName:
    | 'close'
    | 'check'
    | 'chevron-right'
    | 'chevron-left'
    | 'eye-outline';
  onPress: () => void;
  iconColor: string;
  backgroundColor: string;
  labelText?: string;
};

const CardButton = ({
  iconName,
  onPress,
  iconColor,
  backgroundColor,
  labelText,
}: CardButtonProps) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.container, { backgroundColor }]}
        onPress={onPress}
      >
        <Surface style={[styles.surface, { backgroundColor }]}>
          <Icon name={iconName} size={25} color={iconColor} />
        </Surface>
      </TouchableOpacity>
      {labelText ? (
        <>
          <Spacer vertical={5} />
          <Text style={styles.labelText}>{labelText}</Text>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  container: {
    height: 50,
    width: 50,
    borderRadius: 15,
  },
  surface: {
    borderRadius: 15,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 12,
  },
});

export { CardButton };
