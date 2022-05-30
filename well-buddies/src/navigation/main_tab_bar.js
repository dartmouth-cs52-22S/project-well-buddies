/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import { Text, View, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import About from '../components/about';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { fetchEmotion } from '../state/actions/emotion';
// import SearchTab from './search_tab';
import Home from '../components/home/home';
import Buddy from '../components/buddy';
import Profile from '../components/profile/profile';
import CalendarTab from './calendar_tab';

const Tab = createBottomTabNavigator();

function MainTabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        screenOptions={

          ({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Buddy') {
                iconName = 'paw';
              } else if (route.name === 'Calendar') {
                iconName = 'calendar';
              } else if (route.name === 'Profile') {
                iconName = 'user';
              }

              // Return the respective icon
              return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
            },
          })
        }
      >
        {/* <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="About" component={About} /> */}
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Buddy" component={Buddy} />
        <Tab.Screen name="Calendar" component={CalendarTab} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainTabBar;
