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
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    AsyncStorage.getItem('googleAccessCode').then((token) => {setAccessToken(token);})
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
            <Text>
              {parseDate(event.start.dateTime)}
              {' '}
              -
              {' '}
              {parseDate(event.end.dateTime)}
            </Text>
            </CustomText>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
  signout

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
