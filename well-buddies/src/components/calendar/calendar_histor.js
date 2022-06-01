import React, { useState, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// @ts-expect-error
import { CalendarList } from 'react-native-calendars';
// import DayPicker from 'react-day-picker';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { fetchEmotions } from '../../state/actions/emotion';
import Anguish from '../../assets/img/emotions/anguish';
import Confused from '../../assets/img/emotions/confused';
import Neutral from '../../assets/img/emotions/neutral';
import SlightSmile from '../../assets/img/emotions/slight-smile';
import Smile from '../../assets/img/emotions/smile';

// how to make the calendar is learnt and adopted from https://www.npmjs.com/package/react-native-calendars
class CalendarHistory extends Component {
  componentDidMount = async () => { await this.props.fetchEmotions(); };

  render() {
    // const today = moment().format('YYYY-MM-DD');
    return (
      <View>
        <CalendarList
          // markedDates={{ '2022-06-01': { selected: true, marked: true, selectedColor: 'grey' } }}
              // markedDates={{ [today]: {selected: true, marked: true, selectedColor: "grey"}}}
              // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
              // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={12}
              // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={12}
              // Enable or disable scrolling of calendar list
          scrollEnabled
          firstDay={1}
              // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator
              // only show up to the current date
          // maxDate={new Date()}
          hideExtraDays
              // Callback that gets called on day press
          onDayPress={(day) => {
            console.log('day pressed');
          }}
          dayComponent={({ date, state }) => {
            const dateDate = new Date(date.dateString);
            const dateString = dateDate.toDateString();
            if (dateString in this.props.allEmotions) {
              return (
                <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{flex: 1,textAlign: 'right', color: state === 'disabled' ? 'gray' : 'black' }}>
                  {date.day}
                  {this.props.allEmotions[dateString] === 'Anguish' ? <Anguish /> : <View />}
                  {this.props.allEmotions[dateString] === 'Confused' ? <Confused /> : <View />}
                  {this.props.allEmotions[dateString] === 'Neutral' ? <Neutral /> : <View />}
                  {this.props.allEmotions[dateString] === 'SlightSmile' ? <SlightSmile /> : <View />}
                  {this.props.allEmotions[dateString] === 'Smile' ? <Smile /> : <View />}
                </Text>
                </View>
              );
            }
            return (
            <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={{flex: 1, textAlign: 'right',color: state === 'disabled' ? 'gray' : 'black' }}>
                      {date.day}
                    </Text>
                    </View>
                    )
        
        
        }}        

        />
      </View>
    );
  }
}

const mapStateToProps = (state) => (
  {
    allEmotions: state.emotion.all,
  }
);

export default connect(mapStateToProps, { fetchEmotions })(CalendarHistory);

