/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator, ImageBackground, Button, Dimensions,
} from 'react-native';
import { Card } from 'react-native-elements';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { connect } from 'react-redux';
import Moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuditOutlined } from '@ant-design/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchEvents } from '../../state/actions/calendar';
import CalendarTitle from './calendar_title';
import CalendarEventCell from './calendar_event_cell';
import Cloud from '../../assets/img/empty-states/cloud';

import { getFreeBusy } from '../../services/google-cal-api';

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

  const start = Moment().hour(10);
  const end = Moment().hour(22);

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

  function renderEmptyState() {
    if (Object.entries(props.events).length === 0) {
      return (
        <View style={styles.emptyStateContainer}>
          <Cloud style={styles.cloud} />
          <Text style={styles.emptyStateText}>No events found</Text>
          <Text style={styles.emptyStateText}>for this day</Text>
        </View>
      );
    } else return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.backgroundImg} source={require('../../assets/img/background_gradient.jpg')}>
        <View marginTop={50}>
          <CalendarTitle date={date} setDate={(time) => { setDate(time); }} />
        </View>
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
        <View>
          {renderEmptyState()}
        </View>

      </ImageBackground>
    </SafeAreaView>
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
    height: Dimensions.get('screen').height,
    top: -88,
    // resizeMode: 'cover',
    // height: '100%',
  },
  emptyStateContainer: {
    alignContent: 'center',
    display: 'flex',
    // margin: 50,
    // height: Dimensions.get('screen').height,
    bottom: 380,
    // right: -130,
    justifyContent: 'center',
  },
  emptyStateText: {
    color: '363D4F',
    fontFamily: 'DMSans_Regular',
    fontSize: 18,
    alignSelf:'center',
    color:'#363D4F',
  },
  cloud: {
    alignSelf:'center',
  },
});

const mapStateToProps = (state) => ({
  events: state.events.all,
});

export default connect(mapStateToProps, { fetchEvents })(Calendar);
