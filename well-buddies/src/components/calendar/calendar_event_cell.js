/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import {
  StyleSheet, View, Text, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';
import Moment from 'moment';
import { connect } from 'react-redux';
import TwemojiText from 'react-native-twemojis';
import RegularText from '../custom/regular_text';
import CheckboxChecked from '../../assets/img/checkbox/checkbox-checked';
import Checkbox from '../../assets/img/checkbox/checkbox';
import MediumText from '../custom/medium_text';
import { completeEvent } from '../../state/actions/calendar';
import { activitiesList } from '../../constants';

const CalendarEventCell = (props) => {
  const [checked, setChecked] = useState(false);

  function parseDate(dateTime) {
    Moment.locale('en');
    return Moment(dateTime).format('h:mm A');
  }

  function renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  function renderEmoji() {
    if (props.event.summary.substring(0, 10) === ('WELLNESS: ')) {
      const foundActivity = activitiesList.filter((activity) => activity.title === props.event.summary.substring(10));
      console.log('found', foundActivity[0]?.icon);
      return (
        <View marginRight={4}>
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
    if (props.event.summary.substring(0, 10) === ('WELLNESS: ')) {
      return (
        props.event.summary.substring(10)
      );
    }
    return props.event.summary;
  }

  return (
    <Card borderRadius={5}
      backgroundColor="#d1dce0"
      containerStyle={!checked ? styles.card : styles.checkedCard}
      underlayColor="#d1dce0"
      height={80}
    >
      <View style={styles.innerCard}>
        <View>
          <View>
            <View flexDirection="row">
              <View>
                {renderEmoji()}
              </View>
              <MediumText>
                <Text style={!checked ? styles.title : styles.checkedTitle}>
                  {renderSummary()}
                </Text>
              </MediumText>
            </View>
          </View>
          <View>
            <RegularText>
              <Text style={!checked ? styles.date : styles.checkedDate}>
                {parseDate(props.event.start.dateTime)}
                {' '}
                -
                {' '}
                {parseDate(props.event.end.dateTime)}
              </Text>
            </RegularText>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => {
            props.completeEvent(props.event);
            setChecked(!checked);
          }}
          >
            {!checked ? <Checkbox /> : <CheckboxChecked />}
          </TouchableOpacity>
        </View>
      </View>

    </Card>
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
  checkedCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.26)',
  },
  innerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    color: '#363D4F',
  },
  checkedDate: {
    color: '#FFFFFF',
  },
  title: {
    color: '#363D4F',
    fontWeight: '600',
    fontSize: 20,
  },
  checkedTitle: {
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
  },
  backgroundImg: {
    resizeMode: 'cover',
    height: '100%',
  },
  emoji: {
    fontSize: 20,
  },
});

const mapStateToProps = (state) => ({
  completedEvents: state.events.completed,
});

export default connect(mapStateToProps, { completeEvent })(CalendarEventCell);
