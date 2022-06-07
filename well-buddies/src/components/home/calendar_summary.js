/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import Moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { fetchTodaysEvents } from '../../state/actions/calendar';
import RegularText from '../custom/regular_text';
import CalendarEventCell from '../calendar/calendar_event_cell';

const Calendar = (props) => {
  const [accessToken, setAccessToken] = useState('');
  const CLIENT_ID_IOS = '301956188397-rtuq8kgubluo5ismq4g9pq4cn9bag7ul.apps.googleusercontent.com';
  const navigation = useNavigation();

  const startOfDay = Moment().startOf('day').toISOString();
  const endOfDay = Moment().endOf('day').toISOString();

  const args = {
    access_token: accessToken,
    timeMin: startOfDay,
    timeMax: endOfDay,
    showDeleted: false,
    singleEvents: true,
    maxResults: 2,
    orderBy: 'startTime',
  };

  useEffect(() => {
    AsyncStorage.getItem('googleAccessCode').then((token) => { setAccessToken(token); });
    if (accessToken) {
      props.fetchTodaysEvents(args);
    }
  }, [accessToken]);

  function parseDate(dateTime) {
    Moment.locale('en');
    return Moment(dateTime).format('h:mm A');
  }

  function showEventDetail(event) {
    navigation.navigate('Detail', { event });
  }

  function showEventCalendar(event) {
    navigation.navigate('Calendar');
  }

  return (
    <View style={styles.summaryContainer}>
      {Object.entries(props.events).length ? (
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
      )
        : <Text style={styles.emptyState}>No events for today</Text>}

      <View>
        <TouchableOpacity>
          <Text style={styles.viewMore} onPress={() => { showEventCalendar(props.event); }}>
            VIEW MORE
            {' '}
            {'>'}
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  eventContainer: {
    marginVertical: 1,
  },
  summaryContainer: {
    padding: 4,
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
  emptyState: {
    color: 'white',
    marginLeft: 16,
  },
  viewMore: {
    paddingRight: 16,
    alignSelf: 'flex-end',
    color: '#FFFF',
    letterSpacing: 2,
    marginTop: 12,
  },
});

const mapStateToProps = (state) => ({
  events: state.events.today,
});

export default connect(mapStateToProps, { fetchTodaysEvents })(Calendar);
