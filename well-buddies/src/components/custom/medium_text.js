/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';
import { Text } from 'react-native';
/* import {
  useFonts,
  DMSans_500Medium,
} from 'expo-font'; */

function MediumText(props) {
  return (
    <Text style={{ fontFamily: 'DMSans_Medium' }}>
      {props.children}
    </Text>
  );
}

export default MediumText;
