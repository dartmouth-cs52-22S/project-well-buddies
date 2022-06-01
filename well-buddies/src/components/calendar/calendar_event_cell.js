/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Text, ActivityIndicator, TouchableOpacity, Modal,
} from 'react-native';
import { Card } from 'react-native-elements';
import Moment from 'moment';
import { connect } from 'react-redux';
import TwemojiText from 'react-native-twemojis';
import RegularText from '../custom/regular_text';
import CheckboxChecked from '../../assets/img/checkbox/checkbox-checked';
import Checkbox from '../../assets/img/checkbox/checkbox';
import MediumText from '../custom/medium_text';
import { activitiesList } from '../../constants';
import EventCompletion from '../event_completion';
import { fetchCompletedEvents, completeEventAction } from '../../state/actions/calendar';

// eslint-disable-next-line react/function-component-definition
const CalendarEventCell = (props) => {
  const [checked, setChecked] = useState(false);
  const wellness = (props.event.summary.substring(0, 8) === 'WELLNESS');
  const [event, setEvent] = useState(false);

  function checkChecked() {
    let found = false;
    for (let i = 0; i < props.completedEvents.length; i++) {
      if (props.completedEvents[i] === props.event.id) {
        found = true;
      }
    }
    if (found) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }

  useEffect(() => { async function func() { checkChecked(); } if (!checked) { func(); } }, [props.completedEvents]);

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
    <View>
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
                {renderEmoji()}
                <MediumText>
                  <Text style={!checked ? styles.title : styles.checkedTitle}>
                    {wellness ? props.event.summary.substring(9) : props.event.summary }
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
              if (wellness) {
                props.completeEventAction(props.event.id, '');
              } else {
                props.completeEventAction(props.event.id, 'true');
              }
              setEvent(true);
            }}
              disabled={checked}
            >
              {!checked ? <Checkbox /> : <CheckboxChecked />}
            </TouchableOpacity>
          </View>
        </View>
      </Card>
      <View style={{ position: 'absolute' }}>
        {event ? (
          <Modal animationType="slide" transparent={false}>
            <EventCompletion closeModal={() => setEvent(false)} />
          </Modal>
        ) : <View />}

      </View>
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

export default connect(mapStateToProps, { completeEventAction, fetchCompletedEvents })(CalendarEventCell);
