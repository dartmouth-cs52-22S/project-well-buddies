import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import CatOption from '../../assets/cat-option';
import DogOption from '../../assets/dog-option';
import PandaOption from '../../assets/panda-option';
import CatChosen from '../../assets/cat-chosen';
import DogChosen from '../../assets/dog-chosen';
import PandaChosen from '../../assets/panda-chosen';

function Pet(props) {
  const { pets, setTempPet } = props;

  const [pet, setPet] = useState('');

  const changePet = (num) => {
    if (pet === pets[num]) {
      setTempPet('');
      setPet('');
    } else {
      setTempPet(pets[num]);
      setPet(pets[num]);
    }
  };

  return (
    <View style={styles.nameContainer}>
      <View style={styles.name}>
        <Text style={styles.nameText}>Choose a Buddy</Text>
      </View>
      <View style={styles.buddy}>
        <TouchableOpacity style={{ margin: 20 }} onPress={() => { changePet(0); }}>
          {pet === pets[0] ? <DogChosen /> : <DogOption />}
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 20 }} onPress={() => { changePet(1); }}>
          {pet === pets[1] ? <CatChosen /> : <CatOption />}
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 20 }} onPress={() => { changePet(2); }}>
          {pet === pets[2] ? <PandaChosen /> : <PandaOption />}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Pet;
