import React, { useState, useEffect } from 'react';
import {
  View, Text,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';
import Dog from '../../assets/img/dog/dog';
import Cat from '../../assets/img/cat/cat';
import Panda from '../../assets/img/panda/panda';
import MediumText from '../custom/medium_text';

function BuddyName(props) {
  const { setTempBuddyName, pet, tempPetName } = props;
  const [buddyName, setBuddyName] = useState('');

  useEffect(() => { setBuddyName(tempPetName); }, [tempPetName]);

  return (
    <View style={styles.nameContainer}>
      <View style={styles.name}>
        <View style={styles.question}>
          <MediumText>
            <Text style={styles.nameText}>Name your buddy!</Text>
          </MediumText>
        </View>
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
