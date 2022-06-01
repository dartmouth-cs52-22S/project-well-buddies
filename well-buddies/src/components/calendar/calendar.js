/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator, ImageBackground, Button, Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import Moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchEvents } from '../../state/actions/calendar';
import { fetchActivities } from '../../state/actions/activity';
import CalendarTitle from './calendar_title';
import CalendarEventCell from './calendar_event_cell';
import Cloud from '../../assets/img/empty-states/cloud';

const Calendar = (props) => {
  const [accessToken, setAccessToken] = useState('');
  const [date, setDate] = useState(Moment());

  const startOfDay = Moment(date).startOf('day').toISOString();
  const endOfDay = Moment(date).endOf('day').toISOString();

  const args = {
    access_token: accessToken,
    timeMin: startOfDay,
    timeMax: endOfDay,
    showDeleted: false,
    singleEvents: true,
    maxResults: 100,
    orderBy: 'startTime',
  };

  useEffect(() => { async function fetch ()
    { await AsyncStorage.getItem('googleAccessCode').then((token) => { setAccessToken(token); });
      if (accessToken) {
        props.fetchEvents(args);
      }
    }
    fetch();
  }, []);

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
                <CalendarEventCell event={item} activities={props.activities} />
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
    fontFamily: 'DMSans_Regular',
    fontSize: 18,
    alignSelf: 'center',
    color: '#363D4F',
  },
  cloud: {
    alignSelf: 'center',
  },
});

const mapStateToProps = (state) => ({
  events: state.events.all,
  activities: state.activities.all,
});

export default connect(mapStateToProps, { fetchEvents, fetchActivities })(Calendar);
