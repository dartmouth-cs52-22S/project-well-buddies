/* eslint-disable camelcase */
import React from 'react';
import { Text } from 'react-native-elements';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from '@expo-google-fonts/dm-sans';

function CustomText(props) {
  useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
  });
  useFonts({
    DMSans: require('../../assets/fonts/DMSans-Regular.ttf'),
  });
  return (
    <Text style={{ fontFamily: 'DMSans_400Regular' }}>
      {props.children}
    </Text>
  );
}

export default CustomText;
