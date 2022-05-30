import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, Modal,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/FontAwesome';
// import Profile from './profile';

function EditProfile(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [backToProfile, setBackToProfile] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.pageContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="angle-left" size={30} color="#45587C" onPress={() => { props.closeModal(); }} style={{ marginLeft: 17, marginTop: 10 }} />
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text style={{
              marginTop: -18, fontSize: 16, marginBottom: 17, color: '#45587C', fontWeight: '600',
            }}
            >
              Edit Profile
            </Text>
            <Image source={require('../../assets/img/user_profile.jpeg')} style={styles.profileImage} />
          </View>

        </View>

        <View style={styles.infoContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput style={styles.input}
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              name="userName"
              placeholder="User name"
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.input}>
              <Text>Google email goes here, can't be changed</Text>
            </View>
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput style={styles.input}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              name="password"
              placeholder="password"
              secureTextEntry
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput style={styles.input}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              name="confirmPassword"
              placeholder="Confirm Password"
              secureTextEntry
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Save"
            titleStyle={{
              color: 'white',
              fontSize: 15,
            }}
            buttonStyle={{
              backgroundColor: '#A1CFE9',
              width: '30%',
              alignSelf: 'center',
            }}
          />
        </View>
      </View>

      {/* {backToProfile
        ? (
          <Modal animationType="slide" transparent={false}>
            <Profile closeModal={() => setBackToProfile(false)} />
          </Modal>
        )
        : <View />} */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  pageContainer: {
    height: '100%',
    backgroundColor: '#F6F6EE',
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },

  header: {
    width: '100%',
    height: '23%',
    backgroundColor: '#B3D5DE',
    flexDirection: 'column',
  },

  infoContainer: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 16,
  },

  inputBox: {
    height: '24%',
    width: '100%',
    justifyContent: 'flex-end',
  },

  inputLabel: {
    paddingBottom: '2%',
  },

  input: {
    height: '40%',
    backgroundColor: '#FFFF',
    borderRadius: 8,
    paddingLeft: 5,
  },

  buttonContainer: {
    height: '17%',
    justifyContent: 'center',
  },
});

export default EditProfile;
