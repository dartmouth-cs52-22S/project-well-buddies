/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { connect } from 'react-redux';
// import { getPrimaryCalendar, getCalendarEvents } from '../../services/google-cal-api';
import { fetchEvents } from '../../state/actions/calendar';

const Calendar = (props) => {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  // const [calendarEvents, setEvents] = useState([]);
  const CLIENT_ID_IOS = '301956188397-rtuq8kgubluo5ismq4g9pq4cn9bag7ul.apps.googleusercontent.com';

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: CLIENT_ID_IOS,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });
    // getCalendars();
    if (accessToken) {
      props.fetchEvents(accessToken);
    }
  }, [loggedIn, accessToken]);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userObject = await GoogleSignin.signIn();
      const token = await GoogleSignin.getTokens();
      setAccessToken(token.accessToken);
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
    const scope = await GoogleSignin.addScopes({ scopes: ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events'] });
    console.log('add scpope', scope);
  };

  // const getCalendars = async () => {
  //   if (accessToken) {
  //     try {
  //       const primaryCal = await getPrimaryCalendar(accessToken);
  //       console.log('primary calendar', primaryCal);
  //       const events = await getCalendarEvents(accessToken);
  //       // const calEvents = events.items.map((event) => <Text>{event.summary}</Text>);
  //       setEvents(events);
  //       console.log('events', events);
  //     } catch (error) {
  //       console.log('get cal error', error);
  //     }
  //   }
  // };

  let currentEvents = null;

  // if (calendarEvents.items) {
  //   currentEvents = calendarEvents.items.map((event) => { return <Text>{event.summary}</Text>; });
  // }

  if (props.events) {
    currentEvents = props.events.map((event) => { return <Text>{event.summary}</Text>; });
  }

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
      ) : <Text>not signed in</Text>}
      {currentEvents}
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};

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

const mapStateToProps = (state) => ({
  events: state.events.all,
});

export default connect(mapStateToProps, { fetchEvents })(Calendar);
