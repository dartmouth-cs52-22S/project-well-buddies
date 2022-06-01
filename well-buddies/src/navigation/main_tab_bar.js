/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/home/home';
import Buddy from '../components/buddy';
import Profile from '../components/profile/profile';
import CalendarTab from './calendar_tab';
import BuddyIcon from '../assets/img/tabIcons/buddy';
import BuddyIconFilled from '../assets/img/tabIcons/buddy-chosen';
import HomeIcon from '../assets/img/tabIcons/home';
import HomeIconFilled from '../assets/img/tabIcons/home-chosen';
import ProfileIcon from '../assets/img/tabIcons/profile';
import ProfileIconFilled from '../assets/img/tabIcons/profile-chosen';
import CalendarIcon from '../assets/img/tabIcons/calendar';
import CalendarIconFilled from '../assets/img/tabIcons/calendar-chosen';
import CalendarHistory from '../components/calendar/calendar_histor';

const Tab = createBottomTabNavigator();

function MainTabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={
          {
            tabBarInactiveBackgroundColor: '#FFFFFF',
            tabBarActiveBackgroundColor: 'FFFFFF',
            tabBarActiveTintColor: '#667BA4',
            tabBarInactiveTintColor: '#363D4F',
            headerShown: false,
          }
        }
      >
        {/* <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="About" component={About} /> */}
        <Tab.Screen name="Home"
          options={{
            tabBarIcon: ({ focused }) => (
              focused ? <HomeIconFilled /> : <HomeIcon />
            ),
          }}
          component={Home}
        />
        <Tab.Screen name="Buddy"
          options={{
            tabBarIcon: ({ focused }) => (
              focused ? <BuddyIconFilled /> : <BuddyIcon />
            ),
          }}
          component={Buddy}
        />
        <Tab.Screen name="Calendar"
          options={{
            tabBarIcon: ({ focused }) => (
              focused ? <CalendarIconFilled /> : <CalendarIcon />
            ),
          }}
          component={CalendarTab}
        />
        <Tab.Screen name="Profile"
          options={{
            tabBarIcon: ({ focused }) => (
              focused ? <ProfileIconFilled /> : <ProfileIcon />
            ),
          }}
          component={CalendarHistory}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainTabBar;
