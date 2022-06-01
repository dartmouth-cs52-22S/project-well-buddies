import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import CatOption from '../../assets/img/cat/cat-option';
import DogOption from '../../assets/img/dog/dog-option';
import PandaOption from '../../assets/img/panda/panda-option';
import CatChosen from '../../assets/img/cat/cat-chosen';
import DogChosen from '../../assets/img/dog/dog-chosen';
import PandaChosen from '../../assets/img/panda/panda-chosen';
import MediumText from '../custom/medium_text';

function Pet(props) {
  const { pets, setTempPet, tempPet } = props;

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

  useEffect(() => { setPet(tempPet); }, [tempPet]);

  return (
    <View style={styles.nameContainer}>
      <View style={styles.name}>
        <MediumText>
          <Text style={styles.nameText}>Choose a Buddy</Text>
        </MediumText>
      </View>
      <View style={styles.buddy}>
        <TouchableOpacity style={{ margin: 10, height: '25%', aspectRatio: 1}} onPress={() => { changePet(0); }}>
          {pet === pets[0] ? <DogChosen /> : <DogOption />}
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 10, height: '25%', aspectRatio: 1 }} onPress={() => { changePet(1); }}>
          {pet === pets[1] ? <CatChosen /> : <CatOption />}
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 10, height: '30%', aspectRatio: 1 }} onPress={() => { changePet(2); }}>
          {pet === pets[2] ? <PandaChosen /> : <PandaOption />}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Pet;
