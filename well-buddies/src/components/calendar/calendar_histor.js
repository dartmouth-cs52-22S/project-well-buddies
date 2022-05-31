import React, {useState,Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// @ts-expect-error
import {CalendarList} from 'react-native-calendars';
import DayPicker from 'react-day-picker';
import moment from 'moment';
import Anguish from '../../assets/img/emotions/anguish';
import Confused from '../../assets/img/emotions/confused';
import Neutral from '../../assets/img/emotions/neutral';
import SlightSmile from '../../assets/img/emotions/slight-smile';
import Smile from '../../assets/img/emotions/smile';
import { TouchableOpacity } from 'react-native-gesture-handler';


// how to make the calendar is learnt and adopted from https://www.npmjs.com/package/react-native-calendars
class CalendarHistory extends Component {
    render() {
        const today = moment().format("YYYY-MM-DD");
      return (
        <View>
          <CalendarList
              // markedDates={{ [today]: {selected: true, marked: true, selectedColor: "grey"}}}
              // Callback which gets executed when visible months change in scroll view. Default = undefined
              onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={12}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={12}
              // Enable or disable scrolling of calendar list
              scrollEnabled={true}
              // Enable or disable vertical scroll indicator. Default = false
              showScrollIndicator={true}
              // only show up to the current date
              maxDate={new Date()}
              hideExtraDays={true}
              // Callback that gets called on day press
              onDayPress={day => {
              console.log('day pressed');}}
              dayComponent={({date,state}) => {
                return (
                  <Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>
                    {date.day}
                    <Anguish />
                    {this.props.emotion === 'Anguish' ? <Anguish /> : <View />}
                    {this.props.emotion === 'Confused' ? <AngConfuseduish /> : <View />}
                    {this.props.emotion === 'Neutral' ? <Neutral /> : <View />}
                    {this.props.emotion === 'SlightSmile' ? <SlightSmile /> : <View />}
                    {this.props.emotion === 'Smile' ? <Smile /> : <View />}
                    </Text>
                        );    
                      }}
              />
        </View>
        );
    }
  }     
  
  export default CalendarHistory;


  