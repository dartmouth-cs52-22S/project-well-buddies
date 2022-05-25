import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, TextInput} from 'react-native';

const SignIn = (props)=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={props.closeModal}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View>
        <Text>Email</Text>
        <TextInput onChangeText={(text) => { setEmail(text)}}/>
        <Text>Password</Text>
        <TextInput onChangeText={(text) => { setPassword(text)}}/>    
      </View>
    </SafeAreaView>
  );
}

export default SignIn;