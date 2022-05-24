import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

import googleCal from '../services/google-cal-api';
import ApiCalendar from 'react-google-calendar-api';


class Calendar extends Component {


  handleSignIn = () => {
    ApiCalendar.handleAuthClick()
      .then(() => {console.log('sign in success')});
  }
  

  componentDidMount(){
    this.fetchData();
  }
    fetchData() {
      googleCal()
        .then((responseData) => {
          console.log(responseData);
            this.setState({
              dataSource: responseData,
              isLoading: false,
          });
          }).catch((error) => {
        console.log(error);
      });
    }
    
  render() {
    return (
      <View style={styles.container}>
        <Button onClick={handleSignIn}>Sign In</Button>
        <Text>
          Calendar
        </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
});

export default Calendar;
