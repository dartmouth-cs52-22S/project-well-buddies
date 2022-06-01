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
      console.log('found', foundActivity[0]?.icon);
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
      <Card borderRadius={5}>
        {renderEmoji()}
        <View marginVertical={10}>
          <RegularText>
            <Text style={styles.title}>{renderSummary()}</Text>
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
  emoji: {
    fontSize: 40,
  },

});

export default EventDetail;
