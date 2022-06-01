import React, { Component, componentDidMount, useState } from 'react';
import {
  TouchableOpacity, SafeAreaView, StyleSheet, View, Dimensions, Text, Image, ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import Cat from '../assets/img/cat/cat';
import Dog from '../assets/img/dog/dog';
import Panda from '../assets/img/panda/panda';
import { fetchBuddy } from '../state/actions/buddy';
import { createEmotion, fetchEmotion } from '../state/actions/emotion';
import RegularText from './custom/regular_text';
import Anguish from '../assets/img/emotions/anguish';
import Confused from '../assets/img/emotions/confused';
import Neutral from '../assets/img/emotions/neutral';
import SlightSmile from '../assets/img/emotions/slight-smile';
import Smile from '../assets/img/emotions/smile';

class Checkin extends Component {
  // eslint-disable-next-line react/no-arrow-function-lifecycle
  componentDidMount = async () => { await this.props.fetchBuddy(); };

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#F6F6EE' }}>
        <View style={styles.container}>
          <View style={styles.pet}>
            {this.props.pet === 'Dog' ? <Dog /> : <View />}
            {this.props.pet === 'Cat' ? <Cat /> : <View />}
            {this.props.pet === 'Panda' ? <Panda /> : <View />}
          </View>
          <RegularText>
            <Text style={styles.checkin}>
              How are you
              {'\n'}
              doing today?
            </Text>
          </RegularText>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={async () => { await this.props.createEmotion('Anguish'); await this.props.fetchEmotion(); }}>
              <Anguish />
            </TouchableOpacity>
            <TouchableOpacity onPress={async () => { await this.props.createEmotion('Confused'); await this.props.fetchEmotion(); }}>
              <Confused />
            </TouchableOpacity>
            <TouchableOpacity onPress={async () => { await this.props.createEmotion('Neutral'); await this.props.fetchEmotion(); }}>
              <Neutral />
            </TouchableOpacity>
            <TouchableOpacity onPress={async () => { await this.props.createEmotion('SlightSmile'); await this.props.fetchEmotion(); }}>
              <SlightSmile />
            </TouchableOpacity>
            <TouchableOpacity onPress={async () => { await this.props.createEmotion('Smile'); await this.props.fetchEmotion(); }}>
              <Smile />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  checkin: {
    fontSize: 32,
    color: '#363D4F',
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    fontWeight: '500',
  },
  checkinBuddy: {
    height: 200,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginTop: 30,
  },
  buttons: {
    width: Dimensions.get('window').width * 0.7,
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  pet: {
    width: '50%',
    aspectRatio: 1,
    marginBottom: 30,
  },

});

const mapStateToProps = (state) => (
  {
    pet: state.buddy.pet,
  }
);

export default connect(mapStateToProps, { fetchBuddy, createEmotion, fetchEmotion })(Checkin);
