
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import About from '../components/about';
import Ionicons from 'react-native-vector-icons/FontAwesome';
// import SearchTab from './search_tab';
import Home from '../components/home';
import Buddy from '../components/buddy';
import Calendar from '../components/calendar';
import Profile from '../components/profile';

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
        
            // // Customize the icon we display based on the tab route
            // if (route.name === 'About') {
            //   iconName = 'info-circle';
            // }
            // // Adding the search icon
            // else if (route.name === 'Search') {
            //   iconName = 'search';
            // }
            if (route.name === 'Home') {
              iconName = 'home';
            }
            else if (route.name === 'Buddy') {
              iconName = 'paw';
            }
            else if (route.name === 'Calendar') {
              iconName = 'calendar';
            }
            else if (route.name === 'Profile') {
              iconName = 'user';
            }
        
            // Return the respective icon
            return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
          },
        })}
      >
        {/* <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="About" component={About} /> */}
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Buddy" component={Buddy} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default MainTabBar;