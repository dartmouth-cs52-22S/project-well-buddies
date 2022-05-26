/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight, FlatList, TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { connect } from 'react-redux';
import Moment from 'moment';
import { fetchEvents } from '../../state/actions/calendar';

const Calendar = (props) => {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  const CLIENT_ID_IOS = '301956188397-rtuq8kgubluo5ismq4g9pq4cn9bag7ul.apps.googleusercontent.com';

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: CLIENT_ID_IOS,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });
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

  const addScope = async () => {
    const scope = await GoogleSignin.addScopes({ scopes: ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events'] });
    console.log('add scpope', scope);
  };

  function parseDate(dateTime) {
    Moment.locale('en');
    return Moment(dateTime).format('h:mm A');
  }
  function showEventDetail(event) {
    props.navigation.navigate('Detail', { event });
  }

  function renderEventCell(event) {
    return (
      <TouchableOpacity onPress={() => { showEventDetail(event); }}>
        <Card borderRadius={5}
          style={styles.card}
          onPress={() => { showEventDetail(event); }}
          underlayColor="#d1dce0"
          height={80}
        >
          <View>
            <Text
              style={styles.title}
            >
              {event.summary}

            </Text>
          </View>
          <View>
            <Text>
              {parseDate(event.start.dateTime)}
              {' '}
              -
              {' '}
              {parseDate(event.end.dateTime)}
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.events}
        renderItem={({ item }) => { return renderEventCell(item); }}
      />
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
  },
  card: {
    textAlign: 'left',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
});

const mapStateToProps = (state) => ({
  events: state.events.all,
});

export default connect(mapStateToProps, { fetchEvents })(Calendar);
