import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import axios from 'axios';

function Calendar() {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  // const CALENDER_CLIENT_ID = '301956188397-pbr5kqsk2mina10bq4i67uvb92v8p6l3.apps.googleusercontent.com';
  // const FIREBASE_CLIENT_ID = '529502837326-a50ihbbtkesh1qag5r1ce3doccd9jffl.apps.googleusercontent.com';
  const CLIENT_ID_IOS = '301956188397-rtuq8kgubluo5ismq4g9pq4cn9bag7ul.apps.googleusercontent.com';
  const API_URL = 'https://www.googleapis.com/calendar/v3';

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: CLIENT_ID_IOS,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });
  }, [loggedIn]);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userObject = await GoogleSignin.signIn();
      const token = await GoogleSignin.getTokens();
      setAccessToken(token.accessToken);
      // console.log('token after signing in', token);
      // console.log('access token', token?.accessToken);
      setloggedIn(true);
      setuserInfo(userObject);
      addScope();
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

  const signOut = async () => {
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

  const addScope = async () => {
    const scope = await GoogleSignin.addScopes({ scopes: ['https://www.googleapis.com/auth/calendar'] });
    console.log('add scpope', scope);
  };

  // const getCalendars = async () => {
  //   if (loggedIn) {
  //     console.log('logged');
  //     try {
  //       const { tokens } = await GoogleSignin.getTokens();
  //       console.log('tokens', tokens);
  //       const calendars = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/q4hprhq5gnjkrpqsljr3b0541o@group.calendar.google.com/?access_token=${tokens.accessToken}`);
  //       console.log("calendars", calendars);
  //     } catch (error) {
  //       console.log('get error', error);
  //     }
  //   }
  // }

  return (
    <View style={styles.container}>
      <Text>
        Calendar
      </Text>
      {loggedIn ? (
        <Text>
          {' '}
          {userInfo?.user?.name }
          {' '}
          signed in
        </Text>
      ) : <Text>not signed in</Text> }
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
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
