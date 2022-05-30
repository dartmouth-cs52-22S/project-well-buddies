import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, Modal, SafeAreaView, Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import Onboarding from './onboarding';
import { styles } from './styles';
import CatHead from '../../assets/img/cat/cat-head';
import { signIn } from '../../services/google-login';
import GetStarted from '../../assets/img/get-started';
import { signinUser } from '../../state/actions/user';
import { fetchBuddy } from '../../state/actions/buddy';
// import RegularText from '../custom/regular_text';
// import BoldText from '../custom/bold_text';
// import MediumText from '../custom/medium_text';

function Landing(props) {
  const [onboarding, setOnboarding] = useState(false);

  const signInFunction = async () => {
    const userInfo = await signIn();
    if (userInfo === null) {
      alert('Something went wrong during sign in.');
    } else if (userInfo !== 'cancelled') {
      await props.signinUser(userInfo.idToken);
      await props.fetchBuddy();
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
          {/* <RegularText> */}
          <Text style={styles.welcome}>Welcome to</Text>
          {/* </RegularText> */}
          {/* <BoldText> */}
          <Text style={styles.title}>WellBuddies</Text>
          {/* </BoldText> */}
        </View>
        <TouchableOpacity onPress={() => { setOnboarding(true); }} style={{ paddingTop: '20%' }}>
          <GetStarted />
        </TouchableOpacity>
        <TouchableOpacity onPress={signInFunction} style={{ display: 'flex', flexDirection: 'row', paddingBottom: '20%' }}>
          {/* <RegularText> */}
          <Text style={styles.signInText}>or</Text>
          {/* </RegularText> */}
          {/* <MediumText> */}
          <Text style={{ ...styles.signInText, textDecorationLine: 'underline' }}> SIGN IN </Text>
          {/* </MediumText> */}
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
