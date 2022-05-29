/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';
import { Text } from 'react-native';
/* import {
  useFonts,
  DMSans_700Bold,
} from 'expo-font'; */

function BoldText(props) {
  return (
    <Text style={{ fontFamily: 'DMSans_Bold' }}>
      {props.children}
    </Text>
  );
}

export default BoldText;
