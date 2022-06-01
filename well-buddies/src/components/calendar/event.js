import React from 'react';
import {
<<<<<<< HEAD
  StyleSheet, View, Text, Dimensions,
} from 'react-native';
import { Card } from 'react-native-elements';
import Moment from 'moment';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegularText from '../custom/regular_text';

function EventDetail(props) {
  // example of destructuring, the below is equivalent to props.route.params.video
  const { route } = props;
  const { event } = route.params;
  function parseStartTime(dateTime) {
    Moment.locale('en');
    return Moment(dateTime).format('h:mm');
  }

  function parseEndTime(dateTime) {
    Moment.locale('en');
    return Moment(dateTime).format('h:mm A');
  }
  function parseDay(dateTime) {
    Moment.locale('en');
    return Moment(dateTime).format('dddd');
  }
  function parseDate(dateTime) {
    Moment.locale('en');
    return Moment(dateTime).format(' MMMM D, YYYY');
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#F2F7F9',
        display: 'flex',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      }}
    >
      <Card borderRadius={5}>
        <View marginVertical={10}>
          <RegularText>
            <Text style={styles.title}>{event.summary}</Text>
          </RegularText>
        </View>
        <View marginVertical={2}>
          <RegularText>
            <Text style={styles.date}>
              {parseDay(event.start.dateTime)}
              ,
              {parseDate(event.start.dateTime)}
              {' '}
            </Text>
          </RegularText>
        </View>
        <View marginVertical={2}>
          <RegularText>
            <Text style={styles.time}>
              {parseStartTime(event.start.dateTime)}
              {' '}
              -
              {' '}
              {parseEndTime(event.end.dateTime)}
            </Text>
          </RegularText>
        </View>
        <View marginVertical={2}>
          <RegularText>
            <Text style={styles.email}>
              <View marginLeft={2}>
                <Ionicons name="calendar-o" size={20} color="#45587C" />
              </View>
              {' '}
              {event.organizer.email}
            </Text>
          </RegularText>
        </View>
      </Card>
    </SafeAreaView>
  );
}

=======
  StyleSheet, View, Text,
} from 'react-native';
import { Card } from 'react-native-elements';
// import CustomText from '../custom/custom_text';
import Moment from 'moment';
import Ionicons from 'react-native-vector-icons/FontAwesome';

function parseStartTime(dateTime) {
  Moment.locale('en');
  return Moment(dateTime).format('h:mm');
}

function parseEndTime(dateTime) {
  Moment.locale('en');
  return Moment(dateTime).format('h:mm A');
}
function parseDay(dateTime) {
  Moment.locale('en');
  return Moment(dateTime).format('dddd');
}
function parseDate(dateTime) {
  Moment.locale('en');
  return Moment(dateTime).format(' MMMM D, YYYY');
}

function EventDetail(props) {
  // example of destructuring, the below is equivalent to props.route.params.video
  const { route } = props;
  const { event } = route.params;

  return (
    <Card>
      <Text style={styles.title}>{event.summary}</Text>
      <Text style={styles.date}>
        {parseDay(event.start.dateTime)}
        ,
        {parseDate(event.start.dateTime)}
        {' '}
      </Text>
      <Text style={styles.time}>
        {parseStartTime(event.start.dateTime)}
        {' '}
        -
        {' '}
        {parseEndTime(event.end.dateTime)}
      </Text>
      <Text style={styles.email}>
        <Ionicons name="calendar-o" size={20} color="#818589" />
        {' '}
        {event.organizer.email}
      </Text>
    </Card>
  );
}

>>>>>>> 067eb41d037d54cc014640b7b88fc45295c51b10
const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 28,
    color: '#45587c',
  },
  time: {
    fontWeight: '600',
    fontSize: 15,
    color: '#45587c',
  },
  date: {
    fontWeight: '600',
    fontSize: 15,
    color: '#45587c',
  },
  email: {
    fontWeight: '600',
    color: '#45587c',
  },

});

export default EventDetail;
