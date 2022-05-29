/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, FlatList,
} from 'react-native';
import { Card } from 'react-native-elements';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { connect } from 'react-redux';
import Moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { fetchEvents } from '../../state/actions/calendar';
import RegularText from '../custom/regular_text';

const Calendar = (props) => {
  const [accessToken, setAccessToken] = useState('');
  const [date, setDate] = useState(Moment());
  const CLIENT_ID_IOS = '301956188397-rtuq8kgubluo5ismq4g9pq4cn9bag7ul.apps.googleusercontent.com';
  const navigation = useNavigation();

  const startOfDay = Moment(date).startOf('day').toISOString();
  const endOfDay = Moment(date).endOf('day').toISOString();

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
    GoogleSignin.configure({
      iosClientId: CLIENT_ID_IOS,
    });
    AsyncStorage.getItem('googleAccessCode').then((token) => { setAccessToken(token); });
    if (accessToken) {
      props.fetchEvents(args);
    }
  }, []);

  function parseDate(dateTime) {
    Moment.locale('en');
    return Moment(dateTime).format('h:mm A');
  }

  function showEventDetail(event) {
    navigation.navigate('Detail', { event });
  }

  function renderEventCell(event) {
    return (
    //   <TouchableOpacity onPress={() => { showEventDetail(event); }}>
      <Card borderRadius={5}
        onPress={() => { showEventDetail(event); }}
        underlayColor="#d1dce0"
        height={80}
      >
        <View>
          <RegularText>
            <Text style={styles.title}>
              {event.summary}
            </Text>
          </RegularText>
        </View>
        <View>
          <RegularText>
            <Text>
              {parseDate(event.start.dateTime)}
              {' '}
              -
              {' '}
              {parseDate(event.end.dateTime)}
            </Text>
          </RegularText>
        </View>
      </Card>
    //   </TouchableOpacity>
    );
  }

  function showEventCalendar(event) {
    navigation.navigate('Calendar');
  }

  return (
    <View>
      {Object.entries(props.events).length ? (
        <FlatList
          data={props.events}
          renderItem={({ item }) => { return renderEventCell(item); }}
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
  date: {
    color: '#FFFFFF',
    fontSize: 25,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
  },
  emptyState: {
    color: 'white',
    fontFamily: 'DMSans_400Regular',
    marginLeft: 16,
  },
  viewMore: {
    paddingRight: 16,
    alignSelf: 'flex-end',
    color: '#FFFF',
    fontFamily: 'DMSans_500Medium',
    letterSpacing: 2,
  },
});

const mapStateToProps = (state) => ({
  events: state.events.all,
});

export default connect(mapStateToProps, { fetchEvents })(Calendar);
