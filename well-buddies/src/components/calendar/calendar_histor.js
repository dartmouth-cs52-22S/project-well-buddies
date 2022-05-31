import React, { useState, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// @ts-expect-error
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';

// how to make the calendar is learnt and adopted from https://www.npmjs.com/package/react-native-calendars
class CalendarHistory extends Component {
  render() {
    const today = moment().format('YYYY-MM-DD');
    return (
      <View>
        <CalendarList
          markedDates={{
            [today]: { selected: true, marked: true, selectedColor: 'grey' },
          }}
            // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
            // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
            // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
            // Enable or disable scrolling of calendar list
          scrollEnabled
            // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator
            // only show up to the current date
          maxDate={new Date()}
          hideExtraDays
            // Callback that gets called on day press
          onDayPress={(day) => {
            console.log('day pressed');
          }}
        />
      </View>
    );
  }
}

export default CalendarHistory;
