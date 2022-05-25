import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Modal, SafeAreaView, Dimensions} from 'react-native';
import SignIn from './signin';
import Onboarding from './onboarding';
import { styles } from './styles';

const Landing = () => {
  const [signInModal, setSignInModal] = useState(false);
  const [onboarding, setOnboarding] = useState(false);

  return(
    <SafeAreaView style={{
      backgroundColor: '#ffffff',
      flexDirection: 'column',
      height: Dimensions.get('window').height,
      justifyContent: 'space-around',
    }}>
      <View style={styles.landingPage}>
        <Text>Welcome to Well Buddies!</Text>
        <TouchableOpacity onPress={()=>{setSignInModal(true);}}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setOnboarding(true)}}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {signInModal ?
        (
        <Modal animationType="slide"transparent={false}>
          <SignIn closeModal={()=>setSignInModal(false)} />
        </Modal> 
        )
        : <View/>
      }
      {onboarding ?
        (
        <Modal animationType="slide"transparent={false}>
          <Onboarding closeModal={()=>setOnboarding(false)} />
        </Modal> 
        )
        : <View/>
      }
    </SafeAreaView>
  )
  
}

export default Landing;
