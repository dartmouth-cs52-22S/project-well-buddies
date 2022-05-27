import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image, ImageBackground,
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image}>
          <Text style={styles.welcome}>
            Welcome!
          </Text>
          <View style={styles.calendarContainer}>
            <Text style={styles.calendarContainerText}>
              Today at a glance
            </Text>

            <View style={styles.calendarContainerInfo}>
              <Text style={styles.calendarContainerTextTemp}>
                info from calendar component goes here
              </Text>
            </View>

          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: '100%',
  },

  welcome: {
    margin: 16,
    fontSize: 25,
    color: 'white',
  },

  calendarContainerInfo: {
    width: 400,
    height: 200,
    backgroundColor: 'white',
  },

  calendarContainerText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 15,
    marginLeft: 16,
  },

  calendarContainerTextTemp: {
    color: 'black',
    height: '35%',
    textAlign: 'center',
    marginTop: '20%',
  },

});

export default Home;
