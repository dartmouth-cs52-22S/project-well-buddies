import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';

function TempSearch(props) {
  return <Button onPress={() => { props.navigation.navigate('Detail'); }} title="next" />;
}
function TempDetail(props) {
  return <Button onPress={() => { props.navigation.pop(); }} title="close" />;
}

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
function SearchTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={VideoList}
      />
      <Stack.Screen name="Detail" component={VideoDetail} />
    </Stack.Navigator>
  );
}

export default SearchTab;
