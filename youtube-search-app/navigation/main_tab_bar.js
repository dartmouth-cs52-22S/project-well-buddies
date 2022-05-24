
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../components/about';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import SearchTab from './search_tab';
import Calendar from '../components/calendar';

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
        
            // Customize the icon we display based on the tab route
            if (route.name === 'About') {
              iconName = 'info-circle';
            }
            // Adding the search icon
            else if (route.name === 'Search') {
              iconName = 'search';
            }
            // Adding the search icon
            else if (route.name === 'Calendar') {
            iconName = 'calendar';
            }
        
            // Return the respective icon
            return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
          },
        })}
      >
        <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Calendar" component={Calendar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default MainTabBar;