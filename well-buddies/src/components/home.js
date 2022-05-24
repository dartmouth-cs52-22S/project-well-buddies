import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import apiTest from '../services/well-buddies-api';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "loading..."
    };
  }

  async componentDidMount() {
    try {
      const res = await apiTest();
      this.setState({message: res.message})
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        />
        <Text>
          {this.state.message}
        </Text>
        <Text>
          This app was written in React-Native.
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

export default Home;