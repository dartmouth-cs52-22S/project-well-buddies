/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import {
  SafeAreaView, StyleSheet, Dimensions, View, Text, ImageBackground, Modal, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import TwemojiText from 'react-native-twemojis';
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
import { fetchUser } from '../../state/actions/user';
import Star from '../../assets/img/star';

function Home(props) {
  useEffect(() => {
    async function fetchData() {
      await props.fetchBuddy();
      await props.fetchEmotion();
      await props.fetchCompletedEvents();
      await props.fetchTodayWellness();
      await props.fetchUser();
    }
    fetchData();
    console.log('props', props);
  }, []);
  console.log('props', props);

  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/img/background-2.png')} resizeMode="cover" style={styles.backgroundImage}>
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
            <View marginRight={16}
              flexDirection="row"
              justifyContent="space-between"
            >
              <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>Welcome!</Text>
              </View>
              <View style={styles.starsContainer}>
                <Text style={styles.stars}>
                  {props.stars}
                </Text>
                <Star />
              </View>
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
              { props.today
                ? (
                  <View style={styles.buddyImage}>
                    {props.pet === 'Dog' ? <Dog /> : <View />}
                    {props.pet === 'Cat' ? <Cat /> : <View />}
                    {props.pet === 'Panda' ? <Panda /> : <View />}
                  </View>
                )
                : (
                  <View style={styles.buddyImage}>
                    {props.pet === 'Dog' ? <SleepyDog /> : <View />}
                    {props.pet === 'Cat' ? <SleepyCat /> : <View />}
                    {props.pet === 'Panda' ? <View styles={styles.panda}><SleepyPanda /></View> : <View />}
                  </View>
                )}
              <View>
                {props.today
                  ? (
                    <Text style={styles.buddyStatus}>Great job today!</Text>
                  ) : (
                    <Text style={styles.buddyStatus}>Do a wellness activity to wake your buddy up...</Text>
                  )}
              </View>
            </View>

            <TouchableOpacity onPress={() => props.fetchActivities()}>
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>NEW ACTIVITY</Text>
              </View>
            </TouchableOpacity>
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
    marginBottom: 20,
    height: '38%',
  },

  buddyImage: {
    aspectRatio: 1,
    alignSelf: 'center',
    justifySelf: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: '#5EA985',
    height: 55,
    width: '45%',
    alignSelf: 'center',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 15,
    letterSpacing: 1.5,
    color: '#FFFF',
    fontFamily: 'DMSans_Medium',
  },
  buddyStatus: {
    fontFamily: 'DMSans_Regular',
    color: '#363D4F',
    textAlign: 'center',
    margin: 10,
  },
  stars: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'DMSans_Regular',
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => (
  {
    pet: state.buddy.pet,
    petName: state.buddy.petName,
    emotion: state.emotion.today,
    activities: state.activities.all,
    today: state.activities.today,
    stars: state.auth.stars,
  }
);

export default connect(mapStateToProps, {
  fetchBuddy, fetchEmotion, fetchTodayWellness, fetchCompletedEvents, fetchActivities, fetchUser,
})(Home);
