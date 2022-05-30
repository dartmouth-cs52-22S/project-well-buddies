import React, { useState, useEffect } from 'react';
import {
  View, Text,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';
import MediumText from '../custom/medium_text';

function Name(props) {
  const { setTempName, tempName } = props;
  const [name, setName] = useState('');

  useEffect(() => { setName(tempName); }, [tempName]);

  return (
    <View style={styles.nameContainer}>
      <View style={styles.name}>
        <View style={styles.question}>
          <MediumText>
            <Text style={styles.nameText}>What&apos;s your name?</Text>
          </MediumText>
        </View>
        <TextInput style={styles.nameTextInput} placeholder="Your name" value={name} onChangeText={(newName) => { setName(newName); setTempName(newName); }} />
      </View>
    </View>
  );
}

export default Name;
