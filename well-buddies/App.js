/* eslint-disable react/function-component-definition */
import React from 'react';
import { LogBox } from 'react-native';
import { connect } from 'react-redux';
import RootNavigator from './src/navigation/AppNavigator';

// disable really annoying in app warnings
LogBox.ignoreAllLogs();

const App = (props) => {
  const { auth } = props;
  return (
    <RootNavigator auth={auth} />
  );
};

const mapStateToProps = (state) => (
  {
    auth: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, null)(App);
