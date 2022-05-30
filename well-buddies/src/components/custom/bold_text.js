/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';
import { Text, View } from 'react-native-elements';
import {
  useFonts,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';
import SplashScreen from '../../assets/img/splash-screen';

function BoldText(props) {
  const [fontsLoaded] = useFonts({
    DMSans_700Bold,
  });
  // if (!fontsLoaded) {
  //   console.log('fonts bold', fontsLoaded);
  //   return <SplashScreen />;
  // }
  return (
    <Text style={{ fontFamily: 'DMSans_700Bold' }}>
      {props.children}
    </Text>
  );
}

export default BoldText;
