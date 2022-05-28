import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { signoutUser, fetchBuddy } from '../../state/actions/user';
import { signOut } from '../../services/google-login';
import Cat from '../../assets/cat';
import Dog from '../../assets/dog';
import Panda from '../../assets/panda';
import EditProfile from './edit_profile';

function Profile(props) {

    const signout = async () => {
      await signOut()
      await props.signoutUser();
    }

    useEffect(()=>{ async () => {await props.fetchBuddy();}}, []);

    const [editProfile, setEditProfile] = useState(false);

    return (
    <SafeAreaView>
      
    <View style={styles.pageContainer}>       
        <View style={styles.header}>
              
            <View style={styles.userInfoBox}>
            
              <View style={styles.userNameBox}>
                <Text style={styles.userName}>User Name</Text>  
              </View>

              <View style={styles.userImageBox}>
                <Image source={require('../../assets/user_profile.jpeg')} style={styles.profileImage}></Image>
              </View>

            <TouchableOpacity>
            <Ionicons name={'edit'} size={26} color='#45587C' onPress={() => { setEditProfile(true); }} style={styles.editIcon} />
            </TouchableOpacity>
            
            </View>

            <View style={styles.eventInfoBox}>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventItemNum}>100</Text>  
                    <Text style={styles.eventItemText}>Friends</Text>
                </View>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventItemNum}>20</Text>
                    <Text style={styles.eventItemText}>Active Days</Text> 
                </View>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventItemNum}>70</Text>
                    <Text style={styles.eventItemText}>Activities</Text> 
                </View>
            </View>
    
        </View>   

        <View style={styles.contentContainer}>
            <View style={styles.contentItem}>
                <Text style={styles.title}>Emotion History</Text>
                <View style={styles.contentItemMood}>
                    <View style={styles.todayMoodContainer}>
                        <Text style={styles.todayMoodText}>Today's Mood</Text>
                        <View style={styles.todayMoodIcon}>
                            <Ionicons name={'meh-o'} size={70} color='#D0E5F0' />
                        </View>
                    </View>

                    <View style={styles.historyMoodContainer}>
                        <View style={styles.historyMoodBox}>
                            <View style={styles.historyMoodIcon}>
                                <Ionicons name={'calendar-check-o'} size={70} color='#A1CFE9' style={styles.calendarIcon} />
                            </View>
                            <Text style={styles.historyMoodText}>View History</Text>
                        </View>      
                    </View>          
                </View>
            </View>
            
            <View style={styles.contentItem}>
            <Text style={styles.title}>Buddy</Text>
                <View style={styles.contentItemBuddy}>
                    <View style={styles.buddyContainer}>
                        <Text style={styles.buddyImageText}>{props.petName}</Text>
                        <View style={styles.buddyImageContainer}>
                          {props.pet === "Dog" ? <Dog/> : <View/>}
                          {props.pet === "Cat" ? <Cat/> : <View/>}
                          {props.pet === "Panda" ? <Panda/> : <View/>}                        
                        </View>
                    </View>

                    <View style={styles.buddyInfoContainer}>
                        <View style={styles.historyMoodBox}>
                            <View style={styles.historyMoodIcon}>
                                <Text>Buddy info</Text>
                            </View>
                        </View>          
                    </View>
                </View>
            </View>
        </View> 


        <View style={styles.buttonContainer}>
            <Button
                onPress={signout}
                style={styles.signoutButton}
                title='Sign Out'
                titleStyle={{
                  color: "white",
                  fontSize: 15,
              }}
              buttonStyle={{
                backgroundColor: "#A1CFE9",
            }}
                // onPress={signOutAction}
              /> 
        </View>
    </View>
      {editProfile
        ? (
          <Modal animationType="slide" transparent={false}>
            <EditProfile closeModal={() => setEditProfile(false)} />
          </Modal>
        )
        : <View />} 
    </SafeAreaView>
      
    );
  }


const styles = StyleSheet.create({

  pageContainer: {
    flexDirection:'column',
    height:'100%',
    backgroundColor:'#F6F6EE',
    },

  header: {
    width: '100%',
    height: '23%',
    backgroundColor: '#3D5DE',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#B3D5DE',
  },

  userInfoBox: {
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:100,
    backgroundColor: "#B3D5DE",
  },

  userNameBox: {
    backgroundColor: "#B3D5DE",
    width: '30%',
    height: 100,
    alignItems:'center',
    justifyContent:'center'
  },

  userImageBox: {
    backgroundColor: "#B3D5DE",
    width: '30%',
    height: 100,
    marginRight: '5%',
    alignItems:'center',
    justifyContent:'center',
  },

  eventInfoBox: {
    backgroundColor: "#B3D5DE",
    width:'100%',
    height: 50,
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'space-around',
    paddingLeft: '20%',
    paddingRight: '20%',
  },

  eventInfoItem: {
    alignItems:'center',
  },

  eventItemNum: {
    fontSize: 16,
    alignItems: 'center',
    color:'white',
  },

  eventItemText: {
    fontSize: 13,
    alignItems: 'center',
    color:'#45587C',
},
     
  userName:{
    color:'#45587C',
    fontSize: 18,
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },

  contentContainer: {
    height: '60%',
    backgroundColor:'#F6F6EE',
    justifyContent:'center',
  },

  title: {
    paddingBottom:3,
  },

  contentItem: {
    height:'50%',
    backgroundColor: '#F6F6EE',
    marginHorizontal:16,
    justifyContent:'flex-end',
  },

  contentItemMood: {
    height:'80%',
    backgroundColor:'#FFFF',
    borderRadius:22.34,
    flexDirection:'row',
    justifyContent:'space-between',
  },

  todayMoodContainer: {
    width:'50%',
    alignItems:'center',
  },

  todayMoodText: {
    color:'#0008',  
    paddingTop:13,
},

  todayMoodIcon: {
    width:'100%',
    height:'80%',
    alignItems:'center',
    justifyContent:'center',
  },

historyMoodContainer: {
  width:'50%',
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
},

historyMoodBox: {
  backgroundColor:'#F4F5F4',
  alignItems:'center',
  justifyContent:'center',
  width:'80%',
  height:'90%',
  borderRadius:13,
},

historyMoodText: {
  color:'#0008',  
},

historyMoodIcon: {
  width:'100%',
  height:'80%',
  alignItems:'center',
  justifyContent:'center',
},

calendarIcon: {
  justifyContent:'center',
  alignItems:'center',
},

contentItemBuddy: {
  height:'80%',
  backgroundColor:'#FFFFFF',
  borderRadius:22.34,
  flexDirection:'row',
  justifyContent:'space-between',
},

buddyContainer: {
  alignItems:'center',
  width:'40%',
},

buddyImageText: {
  color:'#0008',  
  paddingTop:10,
},

buddyImage: {
  width: 90,
  height: 80,
},

buddyInfoContainer: {
  width:'60%',
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
},

buddyImageContainer: {
  aspectRadio: 1,
  width: '60%',
},
  
contentItemBox: {
  height:'80%',
  backgroundColor:'#FFFFFF',
  borderRadius:22.34,
  justifyContent:'center', 
  alignItems:'center',      
  },

  buttonContainer: {
    height:'17%',
    justifyContent:'center',
  },

  signoutButton: {
    width:'30%',
    alignSelf:'center',
  },

});

const mapStateToProps = (state) => (
  {
    pet: state.buddy.pet,
    petName: state.buddy.petName,
  }
);

export default connect(mapStateToProps, { signoutUser, fetchBuddy })(Profile);
