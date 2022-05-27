import React from 'react';
import {
  View, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import GetStarted from '../../assets/get-started';
import { signIn } from '../../services/google-login';
import { signupUser } from '../../state/actions/user';

function SignUp(props) {
  // eslint-disable-next-line no-shadow
  const { userFields } = props;

  const signUpUser = async () => {
    const userInfo = await signIn();
    props.signupUser(userFields, userInfo, userInfo.idToken);
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

export default connect(null, { signupUser })(SignUp);
