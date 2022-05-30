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
import SplashScreen from '../../assets/img/splash-screen';

function RegularText(props) {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
  });
  // useFonts({
  //   DMSans: require('../../assets/fonts/DMSans-Regular.ttf'),
  // });

  // if (!fontsLoaded) {
  //   console.log('fonts regular', fontsLoaded);
  //   return <SplashScreen />;
  // }
  return (
    <Text style={{ fontFamily: 'DMSans_400Regular' }}>
      {props.children}
    </Text>
  );
}

export default RegularText;
