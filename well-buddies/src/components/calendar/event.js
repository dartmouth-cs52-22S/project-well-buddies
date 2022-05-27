import React from 'react';
import {
  View, Text,
} from 'react-native';
import { Card } from 'react-native-elements';

function EventDetail(props) {
  // example of destructuring, the below is equivalent to props.route.params.video
  const { route } = props;
  const { event } = route.params;

  return (
    <Card>
      <Text>{event.summary}</Text>
      <Text>{event.start.dateTime}</Text>
      <Text>{event.end.dateTime}</Text>
    </Card>
  );
}

export default EventDetail;
