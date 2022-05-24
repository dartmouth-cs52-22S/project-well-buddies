import React, { Component, componentDidMount } from 'react';
import { Icon } from 'react-native-elements'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

// const navigate = useNavigate()
// const onClickHandler = () => navigate("./editbuddy")


export default class Buddy extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isEditing: false,
      };
    }
  editMode = () => {
  this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
  }));
  };

  

  render() {
    if (this.state.isEditing === false) {
        return (
        <View style={styles.container}>
            <View style={styles.editIcon}>
                {/* <TouchableOpacity style={styles.iconContainer} onPress={()=>editMode}> */}
                    <FontAwesome
                    name={"edit"}
                    onClick={this.onClickHandler}
                    size={30}
                    color="#000000"/>
                {/* </TouchableOpacity> */}
                </View>
            <View style={styles.header}>
                <Text style={styles.name}>Your Buddy</Text>       
                </View>
            <Image style={{width: 250, height: 250}} source={require('../assets/buddy.png')}/>
            <View style={styles.body}>
                <Text style={styles.age}>Age: 10 days</Text>
                <Text style={styles.birthday}>Birthday: May 10, 2022</Text>
                <Text style={styles.fav}>Favorite Wellness Activities:{"\n"}taking walks, cleaning room</Text>   
                <Text style={styles.points}>Points: 100</Text>           
                </View>
        </View>
    );
  }
  else{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>Your Buddy</Text>       
                </View>
            <Image style={{width: 250, height: 250}} source={require('../assets/buddy.png')}/>
            <View style={styles.body}>
                <Text style={styles.age}>Age: 10 days</Text>
                <Text style={styles.birthday}>Birthday: May 10, 2022</Text>
                <Text style={styles.fav}>Favorite Wellness Activities:{"\n"}taking walks, cleaning room</Text>   
                <Text style={styles.points}>Points: 100</Text>           
                </View>
        </View>
    );

  }
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'beige'
  },
  name:{
    fontSize: 35,
    marginBottom:10,
  },
  editIcon: {
      marginLeft:300,
  },
  body: {
    alignItems: 'left',
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
    alignItems: 'left',
    // marginTop:350,
    // marginLeft:95,  
  },
  header: {
    fontSize:100,
  },
});
