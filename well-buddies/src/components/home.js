import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import { SafeAreaView, StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

class Home extends Component {
    render() {
      return (
        <SafeAreaView>
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image}>
            <Text style={styles.welcome}>
              Welcome!
            </Text >
            <View style={styles.calendarContainer}>
              <Text style={styles.calendarContainerText}>
                  Today at a glance
              </Text >

              <View style={styles.calendarContainerInfo}>
                <Text style={styles.calendarContainerTextTemp}>
                  info from calendar component goes here
                </Text >   
              </View >
>>>>>>> 6ae01761 (added edit profile page and updated user profile page)

            <View style={styles.calendarContainerInfo}>
              <Text style={styles.calendarContainerTextTemp}>
                info from calendar component goes here
              </Text>
            </View>
<<<<<<< HEAD

          </View>
        </ImageBackground>
      </View>
    );
=======
        </ImageBackground>  
        </View>
        </SafeAreaView>
      );
    }
>>>>>>> 6ae01761 (added edit profile page and updated user profile page)
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
