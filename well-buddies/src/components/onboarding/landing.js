import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, Modal, SafeAreaView, Dimensions,
} from 'react-native';
import SignIn from './signin';
import Onboarding from './onboarding';
import { styles } from './styles';
import CatHead from '../../assets/cat-head';
import { signIn } from '../../services/google-login';
import GetStarted from '../../assets/get-started';

function Landing() {
  const [signInModal, setSignInModal] = useState(false);
  const [onboarding, setOnboarding] = useState(false);

  return (
    <SafeAreaView style={{
      backgroundColor: '#F6F6EE',
      flexDirection: 'column',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <View style={styles.landingPage}>
        <CatHead />
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.title}>WellBuddies</Text>
        </View>
        <TouchableOpacity onPress={() => { setOnboarding(true); }} style={{ paddingTop: '20%' }}>
          <GetStarted />
        </TouchableOpacity>
        <TouchableOpacity onPress={signIn} style={{ display: 'flex', flexDirection: 'row', paddingBottom: '20%' }}>
          <Text style={styles.signInText}>or</Text>
          <Text style={{ ...styles.signInText, textDecorationLine: 'underline' }}> SIGN IN </Text>
        </TouchableOpacity>

      </View>
      {/* {signInModal
        ? (
          <Modal animationType="slide" transparent={false}>
            <SignIn closeModal={() => setSignInModal(false)} />
          </Modal>
        )
        : <View />} */}
      {onboarding
        ? (
          <Modal animationType="slide" transparent={false}>
            <Onboarding closeModal={() => setOnboarding(false)} />
          </Modal>
        )
        : <View />}
    </SafeAreaView>
  );
}

export default Landing;
