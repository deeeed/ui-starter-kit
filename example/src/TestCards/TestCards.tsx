import { Colors } from 'example/assets/Colors';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderWithBack } from '../components/HeaderWithBack';
import ScreenWrapper from '../ScreenWrapper';
import { Header } from './Header';
import { TestSegmentSummary } from './TestSegmentSummary';
import { Spacer } from '../components';
import { Card } from './Card';
import { CardButton } from './CardButton';
import { performLayoutAnimation } from '../utils';
import { TestCompletion } from './TestCompletion';

const expandedText = [
  { label: 'Noun', value: 'Quality' },
  { label: 'Physics', value: 'Mass' },
];

const TOTAL_WORDS_COUNT = 28;

const TestCards = () => {
  const [isCardExpanded, setCardExpanded] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [hasTestCompleted, setTestCompleted] = useState(false);

  const renderCardButtons = () => {
    if (!isCardExpanded) {
      return (
        <View style={[styles.ctaSubContainer, { width: '70%' }]}>
          <CardButton
            iconName={'chevron-left'}
            onPress={() => {
              if (currentCardIndex !== 0) {
                performLayoutAnimation();
                setCurrentCardIndex(currentCardIndex - 1);
              }
            }}
            iconColor={Colors.black}
            backgroundColor={Colors.white}
          />
          <CardButton
            iconName={'eye-outline'}
            onPress={() => {
              performLayoutAnimation();
              setCardExpanded(true);
            }}
            iconColor={Colors.white}
            backgroundColor={Colors.orange}
          />
          <CardButton
            iconName={'chevron-right'}
            onPress={() => {
              performLayoutAnimation();
              if (currentCardIndex < TOTAL_WORDS_COUNT) {
                setCurrentCardIndex(currentCardIndex + 1);
              } else {
                setTestCompleted(true);
              }
            }}
            iconColor={Colors.black}
            backgroundColor={Colors.white}
          />
        </View>
      );
    }

    return (
      <View style={[styles.ctaSubContainer, { width: '100%' }]}>
        <CardButton
          iconName={'check'}
          onPress={() => null}
          iconColor={Colors.white}
          backgroundColor={Colors.green}
          labelText="Perfect Recall"
        />
        <CardButton
          iconName={'check'}
          onPress={() => null}
          iconColor={Colors.green}
          backgroundColor={Colors.white}
          labelText="Correct"
        />
        <CardButton
          iconName={'close'}
          onPress={() => null}
          iconColor={Colors.red}
          backgroundColor={Colors.white}
          labelText="Incorrect"
        />
        <CardButton
          iconName={'close'}
          onPress={() => null}
          iconColor={Colors.white}
          backgroundColor={Colors.red}
          labelText="Totally Forgot"
        />
      </View>
    );
  };

  return (
    <ScreenWrapper withScrollView={false} style={styles.container}>
      <HeaderWithBack
        TitleComponent={
          <Header
            totalWords={TOTAL_WORDS_COUNT}
            completedWords={currentCardIndex}
          />
        }
      />
      {hasTestCompleted ? (
        <View style={styles.completionContainer}>
          <TestCompletion />
        </View>
      ) : (
        <>
          <View style={styles.subContainer}>
            <TestSegmentSummary
              learningCount={5}
              reviewingCount={23}
              masteredCount={4}
            />
            <Spacer vertical={20} />
            <Card
              label="质量"
              subLabel={'Zhìliàng'}
              expandedText={expandedText}
              isExpanded={isCardExpanded}
              onPressCard={() => {
                performLayoutAnimation();
                setCardExpanded(!isCardExpanded);
              }}
            />
          </View>
          <View style={styles.ctaContainer}>
            <Spacer vertical={20} />
            {renderCardButtons()}
          </View>
        </>
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  subContainer: {
    flex: 0.7,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },
  completionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: '60%',
    borderRadius: 40,
    backgroundColor: Colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 56,
    color: Colors.white,
    fontWeight: '700',
  },
  ctaContainer: {
    flex: 0.3,
  },
  ctaSubContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});

export { TestCards };
