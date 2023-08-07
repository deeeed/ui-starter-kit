import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { Spacer } from '../Spacer';
import { Colors } from 'example/assets/Colors';

type HeaderWithBackProps = {
  TitleComponent?: React.ReactElement;
  showBackIcon?: boolean;
  title?: string;
};

const HeaderWithBack = ({
  TitleComponent,
  showBackIcon = true,
  title,
}: HeaderWithBackProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      {showBackIcon ? (
        <>
          <IconButton icon={'chevron-left'} size={35} onPress={handleGoBack} />
          <Spacer horizontal={3} />
        </>
      ) : null}
      {title ? (
        <Text variant={'titleLarge'} style={styles.title}>
          {title}
        </Text>
      ) : null}
      {TitleComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: Colors.purple,
    fontWeight: '600',
  },
});

export { HeaderWithBack };
