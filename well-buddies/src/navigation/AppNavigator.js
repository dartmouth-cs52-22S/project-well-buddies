import React from 'react';
import MainTabBar from './main_tab_bar';
import Landing from './landing';

const RootNavigator = (props) => {
  if (props.auth) {
    return <MainTabBar />
  }
  else {
    return <Landing />
  }
}

// eventually add in redux state here

export default RootNavigator;