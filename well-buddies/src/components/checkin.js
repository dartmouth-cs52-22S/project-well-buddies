import React, { Component, componentDidMount,useState } from 'react';
import { Icon } from 'react-native-elements'
import { TouchableOpacity,SafeAreaView,StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';


export default class Checkin extends Component {
    render() {
      return (
        <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.topPortion}>
                <Text style={styles.checkin}>
                How are you{"\n"}doing today?
                </Text >
                <Image style={styles.checkinBuddy} source={require('../assets/buddy.png')}/>
            </View>
            <View style={styles.bottomPortion1}>
                <TouchableOpacity style={styles.icon1}>
                <Ionicons
                    name={"smile-o"}
                    size={80}
                    color="#000000"/>
                <Text style={styles.emoji}>
                Awesome
                </Text >
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon2}>
                <Ionicons
                    name={"frown-o"}
                    size={80}
                    color="#000000"/>
                <Text style={styles.emoji}>
                Sad
                </Text >
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon3}>
                <Ionicons
                    name={"meh-o"}
                    size={80}
                    color="#000000"/>
                <Text style={styles.emoji}>
                Meh
                </Text >
                </TouchableOpacity>
                </View>
                <View style={styles.bottomPortion2}>
                <TouchableOpacity style={styles.icon4}>
                <Ionicons
                    name={"spinner"}
                    size={75}
                    color="#000000"/>
                <Text style={styles.emoji}>
                Not Sure..
                </Text >
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon5}>
                <Ionicons
                    name={"battery-full"}
                    size={75}
                    color="#000000"/>
                <Text style={styles.emoji}>
                Energized
                </Text >
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon6}>
                <Ionicons
                    name={"fire"}
                    size={75}
                    color="#000000"/>
                <Text style={styles.emoji}>
                Angry
                </Text >
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
      );
    }
  }
  const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
    },
    checkin:{
        fontSize:30,
        backgroundColor:"#D0E5F0",
        textAlignVertical: "center",
        height:80,
        width:200,
        textAlign:"center",
        borderRadius:10, 
        overflow:'hidden',
        marginTop:30,
    },
    checkinBuddy:{
        height:200,
        width:100,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:50,
        marginTop:30,
    },
    emoji:{
        fontSize:20,
    },
    bottomPortion1:{
        marginTop:40,
        flexDirection:"row",
        marginBottom:50,

    },
    bottomPortion2:{
        flexDirection:"row",

    },
    icon1:{
        justifyContent:"center",
        alignItems:"center",
        marginRight:30,
    },
    icon2:{
        justifyContent:"center",
        alignItems:"center",
        marginRight:30,
    },
    icon3:{
        justifyContent:"center",
        alignItems:"center",
    },
    icon4:{
        justifyContent:"center",
        alignItems:"center",
        marginRight:20,
    },
    icon5:{
        justifyContent:"center",
        alignItems:"center",
        marginRight:23,

    },
    icon6:{
        justifyContent:"center",
        alignItems:"center",
    },
    
    });
  