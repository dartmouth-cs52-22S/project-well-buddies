/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import {
  SafeAreaView, StyleSheet, Dimensions, View, Text, ImageBackground, Modal,
} from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CalendarSummary from './calendar_summary';
import Cat from '../../assets/img/cat/cat';
import Dog from '../../assets/img/dog/dog';
import Panda from '../../assets/img/panda/panda';
import SleepyCat from '../../assets/img/cat/cat-sleepy';
import SleepyDog from '../../assets/img/dog/dogs-sleepy';
import SleepyPanda from '../../assets/img/panda/panda-sleepy';
import Checkin from '../checkin';
import { fetchEmotion } from '../../state/actions/emotion';
import { fetchBuddy } from '../../state/actions/buddy';
import { fetchCompletedEvents } from '../../state/actions/calendar';
import { fetchActivities, fetchTodayWellness } from '../../state/actions/activity';

function Home(props) {
  useEffect(() => {
    async function fetchData() {
      await props.fetchBuddy();
      await props.fetchEmotion();
      await props.fetchCompletedEvents();
      await props.fetchActivities();
      await props.fetchTodayWellness();
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/img/background_gradient.jpg')} resizeMode="cover" style={styles.backgroundImage}>
          <View style={styles.container}>
            {props.emotion === ''
              ? (
                <Modal animationType="slide" transparent={false} visable>
                  <Checkin />
                </Modal>
              )
              : (
                <View />
              )}
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcome}>
                Welcome!
              </Text>
            </View>
            <View style={styles.calendarContainer}>
              <Text style={styles.calendarContainerText}>
                Today&apos;s Activities
              </Text>
            </View>
            <View style={styles.calendarContainerInfo}>
              <CalendarSummary style={styles.calendar} />
            </View>

            <View style={styles.buddyContainer}>
                { props.today ? 
                  <View style={styles.buddyImage}>
                  {props.pet === 'Dog' ? <Dog /> : <View />}
                  {props.pet === 'Cat' ? <Cat /> : <View />}
                  {props.pet === 'Panda' ? <Panda /> : <View />}
                  </View>
                : 
                  <View style={styles.buddyImage}>
                  {props.pet === 'Dog' ? <SleepyDog /> : <View />}
                  {props.pet === 'Cat' ? <SleepyCat /> : <View />}
                  {props.pet === 'Panda' ? <SleepyPanda /> : <View />}
                  </View>
                }
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: Dimensions.get('screen').height,
    top: -158,
  },
  container: {
    marginTop: 70,
    width: '100%',
    height: '100%',
  },
  welcomeContainer: {
    marginTop: 40,
    marginLeft: 16,
    marginBottom: 8,
  },
  welcome: {
    fontSize: 32,
    fontFamily: 'DMSans_Medium',
    color: 'white',
  },

  calendarContainerText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 15,
    fontFamily: 'DMSans_Regular',
    marginLeft: 16,
  },

  calendarContainerInfo: {
    height: 200,
  },

  buddyContainer: {
    justifyContent: 'flex-end',
    paddingBottom: 50,
    height: '53%',
  },

  buddyImage: {
    aspectRatio: 1,
    marginLeft: 46,
    marginBottom: 40,
  },
});

const mapStateToProps = (state) => (
  {
    pet: state.buddy.pet,
    petName: state.buddy.petName,
    emotion: state.emotion.today,
    activities: state.activities.all,
    today: state.activities.today
  }
);

export default connect(mapStateToProps, { fetchBuddy, fetchEmotion, fetchTodayWellness, fetchCompletedEvents,fetchActivities })(Home);
