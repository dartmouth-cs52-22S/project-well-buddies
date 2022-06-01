/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, StyleSheet, Dimensions, View, Text, ImageBackground, Modal,
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CalendarSummary from './calendar_summary';
import Cat from '../../assets/img/cat/cat';
import Dog from '../../assets/img/dog/dog';
import Panda from '../../assets/img/panda/panda';
import Checkin from '../checkin';
import { fetchEmotion } from '../../state/actions/emotion';
import { fetchBuddy } from '../../state/actions/buddy';
import { fetchCompletedEvents } from '../../state/actions/calendar';
import { fetchTodayActivity, fetchActivities } from '../../state/actions/activity';
import SleepyCat from '../../assets/img/cat/cat-sleepy';
import SleepyDog from '../../assets/img/dog/dog-sleepy';
import SleepyPanda from '../../assets/img/panda/panda-sleepy';

function Home(props) {
  const [wellnessDone, setWellnessDone] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await props.fetchBuddy();
      await props.fetchEmotion();
      await props.fetchCompletedEvents();
      await props.fetchTodayActivity();
    }
    fetchData();
    if (props.completedEvents.includes(props.activity)) {
      setWellnessDone(true);
    }
  }, []);

  function renderPet(pet) {
    if (pet === 'Dog') {
      if (wellnessDone) {
        return <Dog />;
      } else {
        return <SleepyDog />;
      }
    } else if (pet === 'Cat') {
      if (wellnessDone) {
        return <Cat />;
      } else {
        return <SleepyCat />;
      }
    } else if (wellnessDone) {
      return <Panda />;
    } else {
      return <SleepyPanda />;
    }
  }

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
            <TouchableOpacity onPress={() => props.fetchActivities()}>
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>NEW ACTIVITY</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.buddyContainer}>
              <View style={styles.buddyImage}>
                {renderPet(props.pet)}
                {/* {props.pet === 'Dog' ? <Dog /> : <View />}
                {props.pet === 'Cat' ? <Cat /> : <View />}
                {props.pet === 'Panda' ? <Panda /> : <View />} */}
              </View>
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
  buttonContainer: {
    backgroundColor: '#667BA4',
    height: 55,
    width: '45%',
    alignSelf: 'center',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },

  button: {
    fontSize: 15,
    letterSpacing: 1.5,
    color: '#FFFF',
    fontFamily: 'DMSans_Medium',
  },

});

const mapStateToProps = (state) => (
  {
    pet: state.buddy.pet,
    petName: state.buddy.petName,
    emotion: state.emotion.today,
    activity: state.activities.today,
    completedEvents: state.events.completed,
  }
);

export default connect(mapStateToProps, {
  fetchBuddy, fetchEmotion, fetchCompletedEvents, fetchActivities, fetchTodayActivity,
})(Home);
