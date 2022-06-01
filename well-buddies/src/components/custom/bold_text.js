/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';
import { Text } from 'react-native-elements';
import {
  useFonts,
  DMSans_700Bold,
} from 'expo-font';

function BoldText(props) {
  useFonts({
    DMSans_700Bold,
  });
  return (
    <Text style={{ fontFamily: 'DMSans_700Bold' }}>
      {props.children}
    </Text>
  );
}

export default BoldText;
