import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Calendar = () => {

  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  // const CLIENT_ID = "301956188397-pbr5kqsk2mina10bq4i67uvb92v8p6l3.apps.googleusercontent.com";
  const FIREBASE_CLIENT_ID = "529502837326-a50ihbbtkesh1qag5r1ce3doccd9jffl.apps.googleusercontent.com";

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: FIREBASE_CLIENT_ID,
      offlineAccess: false,
    });
  }, []);

  // code from https://blog.expo.dev/google-sign-in-with-react-native-and-expo-9cac6c392f0e
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userObject = await GoogleSignin.signIn();
      console.log('user', userObject);
      console.log('username', userObject.user.name);
      setloggedIn(true);
      setuserInfo(userObject);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        console.log(error);
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        console.log(error);
        // play services not available or outdated
      } else {
        console.log(error);
        // some other error happened
      }
    }
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  console.log('userinfo', userInfo.user);

    return (
      <View style={styles.container}>
        <Text>
          Calendar
        </Text>
        {loggedIn ? <Text>{userInfo.user.name} signed in</Text> :  <Text>not signed in</Text> }
         <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this.signIn}
              />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
});

export default Calendar;