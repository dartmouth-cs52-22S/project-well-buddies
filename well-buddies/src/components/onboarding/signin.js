import React, { useState } from 'react';
import {
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {
  SafeAreaView, View, Text, TouchableOpacity, TextInput,
} from 'react-native';
import { signIn } from '../../services/google-login';
import { styles } from './styles';
import BackButton from '../../assets/back-button';

function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={props.closeModal}>
        <BackButton />
      </TouchableOpacity>

      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </SafeAreaView>
  );
}

export default SignIn;
