import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, SafeAreaView, Dimensions,
} from 'react-native';
import { styles } from './styles';
import Name from './name';
import Pet from './pet';
import BuddyName from './buddyName';
import Calm from './calm';
import Stress from './stress';
import SignUp from './signup';
import BackButton from '../../assets/back-button';
import ForwardButton from '../../assets/forward-button';

function Onboarding(props) {
  const screens = ['Name', 'Pet', 'BuddyName', 'Calm', 'Stress', 'SignUp'];
  const pets = ['Dog', 'Cat', 'Panda'];
  const calm = ['Going on a walk', 'Calling my parents', 'Cleaning my room', 'Watching the sunset', 'Talking to friends', 'Meditate', 'Go to the gym'];
  const stress = ['Talking to my parents', 'Working out', 'Doing homework', 'Going outside'];
  const { closeModal } = props;
  const [stage, setStage] = useState(screens[0]);
  const [stageNum, setStageNum] = useState(0);
  const [tempUser, setTempUser] = useState({
    pet: '', name: '', petName: '', calm: [], stress: [],
  });

  const goBack = () => {
    if (stage === 'Name') {
      closeModal();
    } else {
      setStage(screens[stageNum - 1]);
      setStageNum(stageNum - 1);
    }
  };

  const goNext = () => {
    if (stage === 'SignUp') {
      // do something here to submit
    } else {
      setStage(screens[stageNum + 1]);
      setStageNum(stageNum + 1);
    }
  };

  const addCalmActivity = (activity) => {
    setTempUser({ ...tempUser, calm: [...tempUser.calm, activity] });
  };

  const addStressActivity = (activity) => {
    setTempUser({ ...tempUser, stress: [...tempUser.stress, activity] });
  };

  const removeCalmActivity = (activity) => {
    if (tempUser.calm.includes(activity)) {
      const newCalm = tempUser.calm.filter((data) => data !== activity);
      setTempUser({ ...tempUser, calm: newCalm });
    }
  };

  const removeStressActivity = (activity) => {
    if (tempUser.calm.includes(activity)) {
      const newCalm = tempUser.stress.filter((data) => data !== activity);
      setTempUser({ ...tempUser, calm: newCalm });
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#F6F6EE',
        flexDirection: 'column',
        display: 'flex',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
      }}
    >
      <View>
        {stage === 'Name' ? (<Name setTempName={(newName) => { setTempUser({ ...tempUser, name: newName }); }} />) : (<View />)}
        {stage === 'Pet' ? (<Pet pets={pets} setTempPet={(newPet) => { setTempUser({ ...tempUser, pet: newPet }); }} />) : (<View />)}
        {stage === 'BuddyName' ? (<BuddyName pet={tempUser.pet} setTempBuddyName={(newPet) => { setTempUser({ ...tempUser, petName: newPet }); }} />) : (<View />)}
        {stage === 'Calm' ? (<Calm activities={calm} add={addCalmActivity} remove={removeCalmActivity} />) : (<View />)}
        {stage === 'Stress' ? (<Stress activities={stress} add={addStressActivity} remove={removeStressActivity} />) : (<View />)}
        {stage === 'SignUp' ? (<SignUp userFields={tempUser} />) : (<View />)}
      </View>
      <View style={{ flexGrow: 100 }}><Text> </Text></View>
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={goBack}>
          <BackButton />
        </TouchableOpacity>
        <TouchableOpacity onPress={goNext}>
          <ForwardButton />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// eventually connect to redux

export default Onboarding;
