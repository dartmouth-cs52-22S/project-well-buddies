import React from 'react';
import MainTabBar from './navigation/main_tab_bar';
import { LogBox } from "react-native";

// disable really annoying in app warnings
LogBox.ignoreAllLogs();

const App = (props) => {
  // <Text>hello world!</Text>
  return <MainTabBar />;
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
