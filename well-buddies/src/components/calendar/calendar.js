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
} from '@react-native-google-signin/google-signin';
import { connect } from 'react-redux';
import Moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchEvents } from '../../state/actions/calendar';
import CalendarTitle from './calendar_title';
<<<<<<< HEAD
import AntDesign from 'react-native-vector-icons/AntDesign';
import { addEvent } from '../../services/google-cal-api';
import CalendarAdd from '../../assets/img/calendar-add';

=======
import CalendarEventCell from './calendar_event_cell';

import { getFreeBusy } from '../../services/google-cal-api';
>>>>>>> origin/master

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

  console.log(startOfDay, endOfDay);
  const start = Moment().hour(10);
  const end = Moment().hour(22);
  console.log(Moment.duration(end.diff(start)).asMinutes());

  const body = {
    timeMin: Moment().hour(10).minute(0).second(0)
      .toISOString(),
    timeMax: Moment().hour(22).minute(0).second(0)
      .toISOString(),
    groupExpansionMax: 1,
    calendarExpansionMax: 1,
    items: [
      {
        id: 'primary',
      },
    ],
  };

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: CLIENT_ID_IOS,
    });
    AsyncStorage.getItem('googleAccessCode').then((token) => { setAccessToken(token); });
    if (accessToken) {
      props.fetchEvents(args);
    }
    getFreeBusy(body, accessToken);
  }, [accessToken, date]);

  function parseDate(dateTime) {
    Moment.locale('en');
    return Moment(dateTime).format('h:mm A');
  }

  function showEventDetail(event) {
    props.navigation.navigate('Detail', { event });
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
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => { showEventDetail(item); }}>
                <CalendarEventCell event={item} />
              </TouchableOpacity>
            );
          }}

        />
        <View style={styles.addIcon}>
          <TouchableOpacity onPress={() => { addEvent(); }}>
            {/* <AntDesign
              name="pluscircleo"
              size={30}
              color="#000000"
            /> */}
            <CalendarAdd/>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* <Button
        onPress={this.buttonClickListener}
        title="Click ME"
        color="#00B0FF"   
      /> */}
      {/* <TouchableOpacity onPress={addEvent}>
      <Icon name="pluscircleo" style={styles.icon}></Icon>
      <Text style={styles.text}>Login with Facebook</Text>
      </TouchableOpacity> */}


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
  addIcon: {
    marginLeft: 300,
  },
});

const mapStateToProps = (state) => ({
  events: state.events.all,
});

export default connect(mapStateToProps, { fetchEvents })(Calendar);
