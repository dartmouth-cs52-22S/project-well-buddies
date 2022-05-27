import React, { Component, componentDidMount,useState } from 'react';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class Buddy extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isEditing: false,
        name: "",
      };
    }
  editMode = () => {
  this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
  }));
  };

  // onInputChangeName = (event) => {
  //   this.state.name=event.target.value
  // };
  onInputChangeName = (newName) => {
    this.setState({ name: newName })
  }
  
  render() {
    if (this.state.isEditing === false) {
        return (
          <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.editIcon}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => { this.editMode(); }}>
                    <FontAwesome
                    name={"edit"}
                    size={30}
                    color="#000000"/>
                </TouchableOpacity>
                </View>
            <View style={styles.header}>
                <Text style={styles.name}>Your Buddy</Text>       
                </View>
            <Image style={{width: 250, height: 250}} source={require('../assets/buddy.png')}/>
            <View style={styles.body}>
                <Text style={styles.age}>Age: 10 days</Text>
                <Text style={styles.birthday}>Birthday: May 10, 2022</Text>
                <Text style={styles.fav}>Favorite Wellness Activities:{"\n"}taking walks, cleaning room</Text>   
                </View>
        </View></SafeAreaView>
    );
  }
  else{
      return (
        <View style={styles.container}>
                <View style={styles.headerEdit}>
                <Text style={styles.headerEdit}>Edit Buddy Profile</Text>       
                </View>
          <Image style={{width: 200, height: 200, marginBottom: 20}} source={require('../assets/buddy.png')}/>
          <View style={styles.bodyEdit}>
                <Text style={styles.editName}>Name</Text>  
                <TextInput
        style={styles.input}
        onChangeText={this.onInputChangeName} 
        value={this.state.name}
        placeholder="Name"
      />     
            {/* <Button
        title="Save"
        onPress={() => { this.editMode(); }}
      /> */}
                <View style={styles.buddyChange}>
                <Text style={styles.editChange}>Change Buddy</Text>  
                </View>
          <View style={styles.buddyOption}>
          <Image style={{width: 70, height: 70, marginRight: 30}} source={require('../assets/buddyicon1.png')}/>
          <Image style={{width: 70, height: 70, marginRight: 30}} source={require('../assets/buddyicon2.png')}/>
          <Image style={{width: 70, height: 70}} source={require('../assets/buddyicon3.png')}/>
          </View>
          <Pressable style={styles.button} onPress={() => { this.editMode(); }}>
      <Text style={styles.buttonTitle}>Save</Text>
    </Pressable>
        </View>
        </View>
      );
    }
}}

const styles = StyleSheet.create({
  editChange:{
    fontSize:16,
    marginTop:20,
    marginBottom:10,
  },
  buddyOption:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  bodyEdit:{
    alignItems:"left",
  },
  editName:{
    fontSize:16,
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
  button: {
    marginTop:30,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 2,
    marginLeft:90,

  },
  input: {
    marginTop:20,
    marginBottom:0,
    backgroundColor: "white",
    height: 40,
    width: 270,
    padding: 10,
  },
  container: {
    // flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'beige'
  },
  name:{
    fontSize: 35,
    marginBottom:30,
  },
  editIcon: {
      marginLeft:300,
  },
  body: {
    alignItems: 'flex-start',
  },
  age: {
    marginTop:25,
    fontSize: 20,
    marginBottom:10,  
  },
  birthday: {
    fontSize: 20,
    marginBottom:10,  
  },
  fav: {
    fontSize: 20,
    marginBottom:10,  
  },
  points: {
    fontSize: 20,
    marginBottom:10,  
  },

  body: {
    alignItems: 'flex-start',
    // marginTop:350,
    // marginLeft:95,
  },
  header: {
    fontSize:100,
  },
  headerEdit: {
    marginTop:-10,
    fontSize:30,
    marginBottom:10,
  },
  
});
