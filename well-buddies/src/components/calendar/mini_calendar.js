/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
// import { Agenda } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
// code from https://github.com/stephy/CalendarPicker

function MiniCalendar(props) {
  return (
    <View style={styles.container}>
      <DateTimePicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 160,
  },
});

export default MiniCalendar;
