/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState,Modal } from 'react';
// import { Dimensions } from 'react-native';

import {
  StyleSheet, View, Text, ActivityIndicator, TouchableOpacity, Alert, SafeAreaView,
} from 'react-native';
import { Card } from 'react-native-elements';
import Moment from 'moment';
import { connect } from 'react-redux';
import RegularText from '../custom/regular_text';
import CheckboxChecked from '../../assets/img/checkbox/checkbox-checked';
import Checkbox from '../../assets/img/checkbox/checkbox';
import MediumText from '../custom/medium_text';
import { completeEvent } from '../../state/actions/calendar';
import EventCompletion from '../event_completion';
import DogCompletion from '../../assets/img/dog/dog-completion';
import CatCompletion from '../../assets/img/cat/cat-completion';
import PandaCompletion from '../../assets/img/panda/panda-completion';

const CalendarEventCell = (props) => {
  console.log('props', props);
  const [checked, setChecked] = useState(false);

  function parseDate(dateTime) {
    Moment.locale('en');
    return Moment(dateTime).format('h:mm A');
  }
  const [editComplete, setEditComplete] = useState(false);
  useEffect(() => {
    async function fetchData() {
      await props.fetchBuddy();
    }
    fetchData();
  }, []);

  function renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView>
    <Card borderRadius={5}
      backgroundColor="#d1dce0"
      containerStyle={!checked ? styles.card : styles.checkedCard}
      underlayColor="#d1dce0"
      height={80}
    >
      <View style={styles.innerCard}>
        <View>
          <View>
            <MediumText>
              <Text style={!checked ? styles.title : styles.checkedTitle}>
                {props.event.summary}
              </Text>
            </MediumText>
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
            {/* {checked && props.pet === 'Dog' ? <DogCompletion /> :<View/>}
            {checked && props.pet === 'Cat' ? <CatCompletion /> :<View/>}
            {checked && props.pet === 'Panda' ? <PandaCompletion /> :<View/>} */}
            {!checked ? <Checkbox /> : <CheckboxChecked />}
            <View>
            {checked? <EventCompletion /> :<View/>}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* {checked
        ? (
          <Modal animationType="slide" transparent={false}>
            <EventCompletion closeModal={() => setChecked(false)} />
          </Modal>
        )
        : <View />} */}
    </Card>

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

export default connect(mapStateToProps, { completeEvent })(CalendarEventCell);
