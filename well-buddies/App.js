import React from 'react';
import MainTabBar from './src/navigation/main_tab_bar';
import RootNavigator from './src/navigation/AppNavigator';
import { LogBox } from "react-native";

// disable really annoying in app warnings
LogBox.ignoreAllLogs();

const App = (props) => {
  //<Text>hello world!</Text>
  return <RootNavigator auth={false} />;
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
