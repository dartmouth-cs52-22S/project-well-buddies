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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchEvents } from '../../state/actions/calendar';
import RegularText from '../custom/regular_text';
import CalendarTitle from './calendar_title';

const Calendar = (props) => {
  const [accessToken, setAccessToken] = useState('');
  const [date, setDate] = useState(Moment());
  const CLIENT_ID_IOS = '301956188397-rtuq8kgubluo5ismq4g9pq4cn9bag7ul.apps.googleusercontent.com';

  const startOfDay = Moment(date).startOf('day').toISOString();
  const endOfDay = Moment(date).endOf('day').toISOString();

  const args = {
    access_token: accessToken,
    timeMin: startOfDay,
    timeMax: endOfDay,
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: 'startTime',
  };

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: CLIENT_ID_IOS,
    });
    AsyncStorage.getItem('googleAccessCode').then((token) => { setAccessToken(token); });
    if (accessToken) {
      props.fetchEvents(args);
    }
  }, [accessToken, date]);

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
          borderColor="#D0E5F0"
          padding={18}
        >
          <View>
            <View style={styles.eventContainer}>
              <RegularText>
                <Text style={styles.title}>
                  {event.summary}
                </Text>
              </RegularText>
            </View>
            <View style={styles.eventContainer}>
              <RegularText>
                <Text style={styles.time}>
                  {parseDate(event.start.dateTime)}
                  {' '}
                  -
                  {' '}
                  {parseDate(event.end.dateTime)}
                </Text>
              </RegularText>
            </View>
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
      <ImageBackground style={styles.backgroundImg} source={require('../../assets/img/background_gradient.jpg')}>
        <CalendarTitle date={date} setDate={(time) => { setDate(time); }} />
        <FlatList
          data={props.events}
          renderItem={({ item }) => { return renderEventCell(item); }}
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
  eventContainer: {
    marginVertical: 1,
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
    fontSize: 18,
    color: '#363D4F',
  },
  time: {
    color: '#363D4F',
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
