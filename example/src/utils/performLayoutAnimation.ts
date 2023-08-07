import { LayoutAnimation, Platform, UIManager } from 'react-native';

const performLayoutAnimation = () => {
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};

export { performLayoutAnimation };
