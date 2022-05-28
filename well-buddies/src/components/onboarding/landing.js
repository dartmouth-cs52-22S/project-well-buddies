import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, Modal, SafeAreaView, Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import Onboarding from './onboarding';
import { styles } from './styles';
import CatHead from '../../assets/cat-head';
import { signIn } from '../../services/google-login';
import GetStarted from '../../assets/get-started';
import { signinUser } from '../../state/actions/user';
import { fetchBuddy } from '../../state/actions/buddy';

function Landing(props) {
  const [onboarding, setOnboarding] = useState(false);

  const signInFunction = async () => {
    const userInfo = await signIn();
    if (userInfo === null){
      alert('Something went wrong during sign in.')
    } else {
      if (userInfo !== "cancelled") {
        await props.signinUser(userInfo.idToken);
        await props.fetchBuddy();
      }
    }
  };

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
        <TouchableOpacity onPress={signInFunction} style={{ display: 'flex', flexDirection: 'row', paddingBottom: '20%' }}>
          <Text style={styles.signInText}>or</Text>
          <Text style={{ ...styles.signInText, textDecorationLine: 'underline' }}> SIGN IN </Text>
        </TouchableOpacity>

      </View>
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

export default connect(null, { signinUser, fetchBuddy })(Landing);
