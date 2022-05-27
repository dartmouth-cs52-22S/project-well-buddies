import React, { useState } from 'react';
import {
  View, Text,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';

function Name(props) {
  const { setTempName } = props;
  const [name, setName] = useState('');

  return (
    <View style={styles.nameContainer}>
      <View style={styles.name}>
        <Text style={styles.nameText}>What&apos;s your name?</Text>
        <TextInput style={styles.nameTextInput} placeholder="Your name" value={name} onChangeText={(newName) => { setName(newName); setTempName(newName); console.log(newName); }} />
      </View>
    </View>
  );
}

export default Name;
