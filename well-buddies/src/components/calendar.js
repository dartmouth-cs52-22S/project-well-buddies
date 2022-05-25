import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import axios from 'axios';

const Calendar = () => {

  let tokenClient;
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const CALENDER_CLIENT_ID = "301956188397-pbr5kqsk2mina10bq4i67uvb92v8p6l3.apps.googleusercontent.com";
  const FIREBASE_CLIENT_ID = "529502837326-a50ihbbtkesh1qag5r1ce3doccd9jffl.apps.googleusercontent.com";
  const CLIENT_ID_IOS = "301956188397-rtuq8kgubluo5ismq4g9pq4cn9bag7ul.apps.googleusercontent.com";
  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: CLIENT_ID_IOS,
      scopes: ['https://www.googleapis.com/auth/calendar'],
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
      getCalendars();
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

  // signInCal = async () => {
  //   ApiCalendar.handleAuth();
  // };

  console.log('userinfo', userInfo.user);

  const API_URL = "https://www.googleapis.com/calendar/v3";

  const getCalendars = async () => {
    const addScope = await GoogleSignin.addScopes({ scopes: ['https://www.googleapis.com/auth/calendar'] });
    console.log('add scpope', addScope);
    const calendars = await axios.get(`${API_URL}/calendars/q4hprhq5gnjkrpqsljr3b0541o@group.calendar.google.com`);
    console.log("calendars", calendars);
  }

    return (
      <View style={styles.container}>
        <Text>
          Calendar
        </Text>
        {loggedIn ? <Text> {userInfo?.user?.name } signed in</Text> :  <Text>not signed in</Text> }
         <GoogleSigninButton
                style={{width: 192, height: 48}}
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