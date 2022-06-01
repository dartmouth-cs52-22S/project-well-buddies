/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';
import Moment from 'moment';
import { connect } from 'react-redux';
import RegularText from '../custom/regular_text';
import CheckboxChecked from '../../assets/img/checkbox/checkbox-checked';
import Checkbox from '../../assets/img/checkbox/checkbox';
import MediumText from '../custom/medium_text';
import { fetchCompletedEvents, completeEventAction } from '../../state/actions/calendar';

const CalendarEventCell = (props) => {
  console.log('props', props);
  const [checked, setChecked] = useState(false);
  const wellness = (props.event.summary.substring(0, 8) === 'WELLNESS');
  console.log(props.event.summary);
  console.log(wellness);

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

  /* function renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } */

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
              <Text>
                &#129496;
              </Text>
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
          }}
            disabled={checked}
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
});

const mapStateToProps = (state) => ({
  completedEvents: state.events.completed,
});

export default connect(mapStateToProps, { completeEventAction, fetchCompletedEvents })(CalendarEventCell);
