import React, { useEffect, useState } from 'react';
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
import BackButton from '../../assets/img/back-button';
import ForwardButton from '../../assets/img/forward-button';

function Onboarding(props) {
  const screens = ['Name', 'Pet', 'BuddyName', 'Calm', 'Stress', 'SignUp'];
  const pets = ['Dog', 'Cat', 'Panda'];
  const calm = ['Going on a walk', 'Calling my parents', 'Cleaning my room', 'Watching the sunset', 'Talking to friends', 'Meditate', 'Go to the gym'];
  const stress = ['Talking to my parents', 'Working out', 'Doing homework', 'Going outside'];
  const { closeModal } = props;
  const [stage, setStage] = useState(screens[0]);
  const [stageNum, setStageNum] = useState(0);
  const [stageComplete, setStageComplete] = useState(false);
  const [tempUser, setTempUser] = useState({
    pet: '', name: '', petName: '', calm: [], stress: [],
  });

  useEffect(() => {
    if (stage === 'Name' && tempUser.name !== '') {
      setStageComplete(true);
    } else {
      setStageComplete(false);
    }
    if (stage === 'Pet' && tempUser.pet !== '') {
      setStageComplete(true);
    } else {
      setStageComplete(false);
    }
    if (stage === 'BuddyName' && tempUser.petName !== '') {
      setStageComplete(true);
    } else {
      setStageComplete(false);
    }
    console.log(`stage complete: ${stageComplete}`);
  }, [tempUser.name, tempUser.pet, tempUser.petName]);

  const goBack = () => {
    if (stage === 'Name') {
      closeModal();
    } else {
      setStage(screens[stageNum - 1]);
      setStageNum(stageNum - 1);
    }
  };

  const goNext = () => {
    setStage(screens[stageNum + 1]);
    setStageNum(stageNum + 1);
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
        {stage === 'Name' ? (<Name tempName={tempUser.name} setTempName={(newName) => { setTempUser({ ...tempUser, name: newName }); }} />) : (<View />)}
        {stage === 'Pet' ? (<Pet tempPet={tempUser.pet} pets={pets} setTempPet={(newPet) => { setTempUser({ ...tempUser, pet: newPet }); }} />) : (<View />)}
        {stage === 'BuddyName' ? (<BuddyName tempPetName={tempUser.petName} pet={tempUser.pet} setTempBuddyName={(newPet) => { setTempUser({ ...tempUser, petName: newPet }); }} />) : (<View />)}
        {stage === 'Calm' ? (<Calm tempCalm={tempUser.calm} activities={calm} add={addCalmActivity} remove={removeCalmActivity} />) : (<View />)}
        {stage === 'Stress' ? (<Stress tempStress={tempUser.stress} activities={stress} add={addStressActivity} remove={removeStressActivity} />) : (<View />)}
        {stage === 'SignUp' ? (<SignUp userFields={tempUser} />) : (<View />)}
      </View>
      <View style={{ flexGrow: 100 }}><Text> </Text></View>
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={goBack}>
          <BackButton />
        </TouchableOpacity>
        <Text>{`${stageComplete}`}</Text>
        <TouchableOpacity onPress={goNext} disabled={!stageComplete}>
          {stage !== 'SignUp' ? <ForwardButton /> : <View />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// eventually connect to redux

export default Onboarding;
