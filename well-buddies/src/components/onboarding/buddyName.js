import React, { useState } from 'react';
import {
  View, Text,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';
import Dog from '../../assets/dog';
import Cat from '../../assets/cat';
import Panda from '../../assets/panda';

function BuddyName(props) {
  const { setTempBuddyName, pet } = props;
  const [buddyName, setBuddyName] = useState('');

  return (
    <View style={styles.nameContainer}>
      <View style={styles.name}>
        <Text style={styles.nameText}>Name your buddy!</Text>
        <TextInput style={styles.nameTextInput} placeholder="Your name" value={buddyName} onChangeText={(newName) => { setBuddyName(newName); setTempBuddyName(newName); }} />
      </View>
      <View style={styles.pet}>
        { pet === 'Dog' ? <Dog /> : <View />}
        { pet === 'Cat' ? <Cat /> : <View />}
        { pet === 'Panda' ? <Panda /> : <View />}
      </View>

    </View>
  );
}

export default BuddyName;
