import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native-paper';
import ScreenWrapper from '../ScreenWrapper';
import { HeaderWithBack, Spacer } from '../components';
import { Images } from '../../assets/Images';
import { TestInfo, TestInfoProps } from './TestInfo';
import { Colors } from 'example/assets/Colors';
import { StackNavigationProp } from '@react-navigation/stack';

const testInfo: TestInfoProps['info'] = [
  { label: 'Source', value: 'Book Feed' },
  { label: 'Total Number Cards', value: '62' },
  { label: 'Test Type', value: 'Self Graded' },
  { label: 'Show', value: 'Characters' },
  {
    label: 'Test Settings',
    value: 'Configure test-type-specific settings + audio',
  },
  { label: 'Card filters', value: 'All Off' },
];

const SpacerBetweenUI = () => <Spacer vertical={8} />;

type ScreenProps = {
  navigation: StackNavigationProp<{ [key: string]: undefined }>;
};

const BeginTest = ({ navigation }: ScreenProps) => {
  return (
    <ScreenWrapper style={styles.container} withScrollView={false}>
      <HeaderWithBack title="Flash Cards" />
      <ScrollView
        style={styles.scrollviewContainer}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <SpacerBetweenUI />
        <Text style={styles.headingText}>{'Selected Feed'}</Text>
        <SpacerBetweenUI />
        <Image source={Images.flashCard} style={styles.flashCardImage} />
        <SpacerBetweenUI />
        <Text style={styles.headingText}>{'Test Information'}</Text>
        <SpacerBetweenUI />
        <TestInfo info={testInfo} />
      </ScrollView>
      <SpacerBetweenUI />
      <View style={styles.bottomCTAContainer}>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('TestCards')}
        >
          <Text style={styles.ctaLabel}>{'Begin Test Session'}</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  contentContainerStyle: {
    padding: 16,
  },
  scrollviewContainer: { flex: 0.9 },
  headingText: {
    fontWeight: '600',
    fontSize: 16,
  },
  flashCardImage: { height: 182, width: 172 },
  bottomCTAContainer: {
    flex: 0.1,
    paddingHorizontal: 16,
  },
  ctaButton: {
    height: 60,
    alignItems: 'center',
    backgroundColor: Colors.purple,
    borderRadius: 18,
    justifyContent: 'center',
  },
  ctaLabel: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: '600',
  },
});

export { BeginTest };
