/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';
import { Text } from 'react-native-elements';
import {
  useFonts,
  DMSans_500Medium,
} from 'expo-font';

function MediumText(props) {
  useFonts({
    DMSans_500Medium,
  });
  return (
    <Text style={{ fontFamily: 'DMSans_500Medium' }}>
      {props.children}
    </Text>
  );
}

export default MediumText;
