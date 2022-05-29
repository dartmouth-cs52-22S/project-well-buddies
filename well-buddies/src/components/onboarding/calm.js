import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import MediumText from '../custom/medium_text';

function Calm(props) {
  const { add, remove, activities } = props;
  const [acts, setActs] = useState([]);

  const addOrRemove = (activity) => {
    if (acts.includes(activity)) {
      const newArray = acts.filter((act) => { return act !== activity; });
      setActs(newArray);
      remove(activity);
    } else {
      setActs([...acts, activity]);
      add(activity);
    }
  };

  return (
    <View style={styles.nameContainer}>
      <View style={styles.name}>
        <MediumText>
          <Text style={styles.nameText}>What are some activities that help you to destress?</Text>
        </MediumText>
      </View>
      <ScrollView contentContainerStyle={styles.activities}>
        { activities.map((activity, idx) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <TouchableOpacity key={idx} onPress={() => { addOrRemove(activity); }}>
              <View style={(acts.includes(activity)) ? styles.activityChosen : styles.activity}>
                <Text style={(acts.includes(activity)) ? styles.activityChosenText : styles.activityText}>
                  {activity}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Calm;
