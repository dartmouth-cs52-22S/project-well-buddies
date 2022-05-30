/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';
import { Text, View } from 'react-native-elements';
import {
  useFonts,
  DMSans_500Medium,
} from '@expo-google-fonts/dm-sans';
import SplashScreen from '../../assets/img/splash-screen';

function MediumText(props) {
  const [fontsLoaded] = useFonts({
    DMSans_500Medium,
  });

  // if (!fontsLoaded) {
  //   console.log('fonts medium', fontsLoaded);
  //   return <SplashScreen />;
  // }

  return (
    <Text style={{ fontFamily: 'DMSans_500Medium' }}>
      {props.children}
    </Text>
  );
}

export default MediumText;
