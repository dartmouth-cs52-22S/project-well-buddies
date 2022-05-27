import React from 'react';
import { LogBox } from 'react-native';
import RootNavigator from './src/navigation/AppNavigator';

// disable really annoying in app warnings
LogBox.ignoreAllLogs();

function App(props) {
  return (<RootNavigator auth={false} />);
}

export default App;
