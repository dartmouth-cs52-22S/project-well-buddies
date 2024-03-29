import React, { useState, useEffect } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import MediumText from '../custom/medium_text';

function Stress(props) {
  const {
    add, remove, activities, tempStress,
  } = props;
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

  useEffect(() => { setActs(tempStress); }, [tempStress]);

  return (
    <View style={styles.nameContainer}>
      <View style={styles.name}>
        <View stlye={styles.question}>
          <MediumText>
            <Text style={styles.nameText}>What are some activities that stress you out?</Text>
          </MediumText>
        </View>
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

export default Stress;
