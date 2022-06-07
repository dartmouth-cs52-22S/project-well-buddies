import React from 'react';
import {
  View, TouchableOpacity, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import GetStarted from '../../assets/img/get-started';
import { signIn } from '../../services/google-login';
import { signupUser } from '../../state/actions/user';
import { fetchBuddy } from '../../state/actions/buddy';
import Cat from '../../assets/img/cat/cat';
import CatExcited from '../../assets/img/cat/emotions/cat-excited';
import { styles } from './styles';

function SignUp(props) {
  // eslint-disable-next-line no-shadow
  const { userFields } = props;

  const signUpUser = async () => {
    const userInfo = await signIn();
    if (userInfo === null) {
      alert('Something went wrong during sign in.');
    } else if (userInfo !== 'cancelled') {
      await props.signupUser(userFields, userInfo.idToken);
    }
  };

  return (
    // <View style={{
    //   display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '70%',
    // }}
    // >
    <View style={styles.signUpContainer}>
      <View style={styles.signUpCat}>
        <Cat />
      </View>
      <TouchableOpacity onPress={signUpUser}>
        <GetStarted />
      </TouchableOpacity>
    </View>

  );
}

export default connect(null, { signupUser, fetchBuddy })(SignUp);
