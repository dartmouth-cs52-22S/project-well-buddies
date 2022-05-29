import React from 'react';
import {
  View, TouchableOpacity, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import GetStarted from '../../assets/get-started';
import { signIn } from '../../services/google-login';
import { signupUser } from '../../state/actions/user';
import { fetchBuddy } from '../../state/actions/buddy';

function SignUp(props) {
  // eslint-disable-next-line no-shadow
  const { userFields } = props;

  const signUpUser = async () => {
    const userInfo = await signIn();
    if (userInfo === null){
      alert('Something went wrong during sign in.')
    } else {
      if (userInfo !== "cancelled") {
        await props.signupUser(userFields, userInfo.idToken);
      }
    }
  };

  return (
    <View style={{
      display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '70%',
    }}
    >
      <TouchableOpacity onPress={signUpUser}>
        <GetStarted />
      </TouchableOpacity>
    </View>

  );
}

export default connect(null, { signupUser, fetchBuddy })(SignUp);
