/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator, ImageBackground, Button,
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
import CustomText from '../custom/custom_text';
import CalendarTitle from './calendar_title';

const Calendar = (props) => {
  const [loggedIn, setloggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [date, setDate] = useState('');
  const CLIENT_ID_IOS = '301956188397-rtuq8kgubluo5ismq4g9pq4cn9bag7ul.apps.googleusercontent.com';

  console.log('start moment', Moment().endOf('day').toISOString());
  const args = {
    access_token: accessToken,
    timeMin: Moment().startOf('day').toISOString(),
    timeMax: Moment().endOf('day').toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: 'startTime',
  };

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: CLIENT_ID_IOS,
    });
    if (accessToken) {
      props.fetchEvents(args);
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
    await GoogleSignin.addScopes({ scopes: ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events'] });
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
            <CustomText>
              <Text style={styles.title}>
                {event.summary}
              </Text>
            </CustomText>
          </View>
          <View>
            <CustomText>
              {parseDate(event.start.dateTime)}
              {' '}
              -
              {' '}
              {parseDate(event.end.dateTime)}
            </CustomText>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }

  function renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImg} source={require('../../assets/background_gradient.jpg')}>
        <CalendarTitle />
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    textAlign: 'left',
  },
  date: {
    color: '#FFFFFF',
    fontSize: 25,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
  },
  backgroundImg: {
    resizeMode: 'cover',
    height: '100%',
  },
});

const mapStateToProps = (state) => ({
  events: state.events.all,
});

export default connect(mapStateToProps, { fetchEvents })(Calendar);
