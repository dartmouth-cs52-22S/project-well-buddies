/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Modal,
} from 'react-native';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RegularText from '../custom/regular_text';

function CalendarTitle(props) {
  const [modalVisible, setModalVisible] = useState(false);
  console.log('modal', modalVisible);

  const handleConfirm = (date) => {
    setModalVisible(false);
    console.log('date', date);
    props.setDate(date);
  };

  return (
    <View paddingLeft={16} paddingTop={50}>
      <DateTimePicker
        isVisible={modalVisible}
        mode="date"
        onCancel={() => setModalVisible(false)}
        onConfirm={handleConfirm}
        date={new Date(props.date)}
      />
      <TouchableOpacity underlayColor="#D7E1EA"
        onPress={() => {
          setModalVisible(!modalVisible);
          console.log('click');
        }}
      >
        <View style={styles.dateButton}>
          <RegularText>
            <Text style={styles.date}>
              {moment(props.date).format('ddd, MMM D')}
            </Text>
          </RegularText>
          <AntDesign name="down" color="#FFFFFF" size={20} />
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    color: '#FFFFFF',
    fontSize: 25,
  },
});

export default CalendarTitle;
