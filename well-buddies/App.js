/* eslint-disable react/function-component-definition */
import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import MainTabBar from './src/navigation/main_tab_bar';
import RootNavigator from './src/navigation/AppNavigator';
import store from './store/configureStore';

// disable really annoying in app warnings
LogBox.ignoreAllLogs();

const App = (props) => {
  return (
    <Provider store={store}>
      <RootNavigator auth />
    </Provider>
  );
};

export default App;
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */
