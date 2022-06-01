import React from 'react';
import {
  StyleSheet, View, Text, Dimensions,
} from 'react-native';
import { Card } from 'react-native-elements';
import Moment from 'moment';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import TwemojiText from 'react-native-twemojis';
import RegularText from '../custom/regular_text';
import { activitiesList } from '../../constants';

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

  function renderEmoji() {
    if (event.summary.substring(0, 10) === ('WELLNESS: ')) {
      const foundActivity = activitiesList.filter((activity) => activity.title === event.summary.substring(10));
      return (
        <View>
          <TwemojiText style={styles.emoji}>
            {foundActivity[0]?.icon}
            {' '}
          </TwemojiText>
        </View>
      );
    }
    return null;
  }

  function renderSummary() {
    if (event.summary.substring(0, 10) === ('WELLNESS: ')) {
      return (
        event.summary.substring(10)
      );
    }
    return event.summary;
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
      <View style={styles.emojiContainer}>
        {renderEmoji()}
      </View>
       
      <View style={styles.contentContainer}>
        <Card borderRadius={5}>

          <View>
            <Text style={styles.title}>{renderSummary()}</Text> 
          </View>

          <View>
              <Text style={styles.date}>
                {parseDay(event.start.dateTime)}
                ,
                {parseDate(event.start.dateTime)}
                {' '}
              </Text>
          </View>

          <View>
              <Text style={styles.time}>
                {parseStartTime(event.start.dateTime)}
                {' '}
                -
                {' '}
                {parseEndTime(event.end.dateTime)}
              </Text>
          </View>

          <View>
              <Text style={styles.email}>
                  <Ionicons style={styles.calendarIcon} name="calendar-o" size={20} color="#45587C" />
                {' '}
                {event.organizer.email}
              </Text>

          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  emojiContainer: {
    alignItems:'flex-start',
    height:'20%',
    justifyContent: 'flex-end',
    marginLeft: 20,
  },

  contentContainer: {
    marginTop: '2%',
  },

  title: {
    fontFamily: 'DMSans_Medium',
    fontSize: 30,
    color: '#45587c',
    paddingBottom: 10,
  },

  time: {
    fontFamily: 'DMSans_Regular',
    fontSize: 18,
    color: '#45587c',
    paddingBottom: 20,
  },

  date: {
    fontFamily: 'DMSans_Regular',
    fontSize: 18,
    color: '#45587c',
    paddingBottom: 8,
  },

  email: {
    fontFamily: 'DMSans_Regular',
    color: '#45587c',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emoji: {
    fontSize: 60,
  },

  calendarIcon: {
    paddingRight:20,
  },

});

export default EventDetail;
