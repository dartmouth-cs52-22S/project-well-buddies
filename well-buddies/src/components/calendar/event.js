import React from 'react';
import {
  StyleSheet,View, Text,
} from 'react-native';
import { Card } from 'react-native-elements';
import CustomText from '../custom/custom_text';
import Moment from 'moment';
import Ionicons from 'react-native-vector-icons/FontAwesome';


function EventDetail(props) {
  // example of destructuring, the below is equivalent to props.route.params.video
  const { route } = props;
  const { event } = route.params;

  return (
    <Card>
      <CustomText><Text style={styles.title}>{event.summary}</Text></CustomText>
      <CustomText><Text style={styles.date}>{parseDay(event.start.dateTime)},{parseDate(event.start.dateTime)} </Text></CustomText>
      <CustomText>
      <Text style={styles.time}>
              {parseStartTime(event.start.dateTime)}
              {' '}
              -
              {' '}
              {parseEndTime(event.end.dateTime)}
      </Text>
      </CustomText>
      <CustomText><Text style={styles.email}><Ionicons name={'calendar-o'} size={20} color='#818589'/>  {event.organizer.email}</Text></CustomText>
    </Card>
  );
}
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
const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 28,
    color: '#45587c'
  },
  time: {
    fontWeight: '600',
    fontSize: 15,
    color: '#45587c'
  },
  date: {
    fontWeight: '600',
    fontSize: 15,
    color: '#45587c'
  },
  email: {
    fontWeight: '600',
    color: '#45587c'
  },

});



export default EventDetail;
