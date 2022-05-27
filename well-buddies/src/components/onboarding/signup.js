import React from 'react';
import {
  View, TouchableOpacity,
} from 'react-native';
import GetStarted from '../../assets/get-started';
import { signIn } from '../../services/google-login';

function SignUp(props) {
  return (
    <View style={{
      display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '70%',
    }}
    >
      <TouchableOpacity onPress={signIn}>
        <GetStarted />
      </TouchableOpacity>
    </View>

  );
}

export default SignUp;
