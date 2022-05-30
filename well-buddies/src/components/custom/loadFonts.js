import * as Font from 'expo-font';

const loadFonts = () => {
  return Font.loadAsync({
    'DMSans-Regular': './assets/fonts/DMSans-Regular.ttf',
    'DMSans-Medium': './assets/fonts/DMSans-Medium.ttf',
    'DMSans-Bold': './assets/fonts/DMSans-Bold.ttf',
  });
};

export default loadFonts;
