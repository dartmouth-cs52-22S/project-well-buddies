import React, { Component, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { fetchBuddy } from '../../state/actions/user';
import CalendarSummary from './calendar_summary';
import Cat from '../../assets/cat';
import Dog from '../../assets/dog';
import Panda from '../../assets/panda';

function Home(props) {

  useEffect(()=>{ async () => {await props.fetchBuddy();}}, []);

    return (
      <SafeAreaView>
      <View style={styles.container}>
          <ImageBackground source={require('../../assets/home_background.png')} resizeMode="cover" style={styles.backgroundImage}>
          <Text style={styles.welcome}>
            Welcome!
          </Text >
          <View style={styles.calendarContainer}>
            <Text style={styles.calendarContainerText}>
                Today at a glance
            </Text >
          </View>
          <View style={styles.calendarContainerInfo}>
            <CalendarSummary style={styles.calendar}/>
          </View>

          <View style={styles.buddyContainer}>
            <View style={styles.buddyImage}>
              {props.pet === "Dog" ? <Dog/> : <View/>}
              {props.pet === "Cat" ? <Cat/> : <View/>}
              {props.pet === "Panda" ? <Panda/> : <View/>}                        
            </View>   
          </View>

      </ImageBackground>  
      </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
  },

  welcome: {
    margin: 16,
    fontSize: 25,
    color: 'white',
  },

  calendarContainerText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 15,
    marginLeft: 16,
  },

  calendarContainerInfo: {
    height: 200,
  },

  buddyContainer: {
    justifyContent:'flex-end',
    height:'53%',
  },

  buddyImage: {
    width:181,
    height:250,
    marginLeft:46,
  }
});

const mapStateToProps = (state) => (
  {
    pet: state.buddy.pet,
    petName: state.buddy.petName,
  }
);

export default connect(mapStateToProps, { fetchBuddy })(Home);