import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Calendar from '../components/calendar/calendar';
import Event from '../components/calendar/event';

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
function CalendarTab() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Calendar"
        component={Calendar}
      />
      <Stack.Screen name="Detail" component={Event} />
    </Stack.Navigator>
  );
}

export default CalendarTab;
