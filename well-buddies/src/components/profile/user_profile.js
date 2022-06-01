import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, StyleSheet, View, ImageBackground, Dimensions, Text, TouchableOpacity, Modal,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchBuddy } from '../../state/actions/buddy';
import Cat from '../../assets/img/cat/cat';
import Dog from '../../assets/img/dog/dog';
import Panda from '../../assets/img/panda/panda';
import Star from '../../assets/img/star';
import LeftArrow from '../../assets/img/tabIcons/left-arrow';
import CalendarIcon from '../../assets/img/tabIcons/calendar-icon';
import { signoutUser } from '../../state/actions/user';
import { signOut } from '../../services/google-login';
import { fetchEmotion } from '../../state/actions/emotion';
import Anguish from '../../assets/img/emotions/anguish';
import Confused from '../../assets/img/emotions/confused';
import Neutral from '../../assets/img/emotions/neutral';
import SlightSmile from '../../assets/img/emotions/slight-smile';
import Smile from '../../assets/img/emotions/smile';
import { useNavigation } from '@react-navigation/native';
import CalendarHistory from '../calendar/calendar_histor';

function UserProfile(props) {
    const [emotionHist, setEmotionHist] = useState(false);

    useEffect(() => {
        async function fetchData() {
          await props.fetchBuddy();
          await props.fetchEmotion();
        }
        fetchData();
      }, []);

      const signout = async () => {
        await signOut();
        await props.signoutUser();
      };

      const navigation = useNavigation();

      function showEmotionCalendar(event) {
        navigation.navigate('EmotionHistory');
      }


    return(
        <SafeAreaView style={{ backgroundColor: '#F6F6EE' }}>
            <View style={styles.container}>
                <View style={styles.navigation}>
                    {/* <LeftArrow /> */}

                 <TouchableOpacity onPress={() => { setEmotionHist(true) }}>
                     <CalendarIcon />
                 </TouchableOpacity>
                    
                </View>

                <View style={styles.userInfo}>
                    <Text style={styles.userName}>USER NAME</Text>
                </View>

                <View style={styles.emotionContainer}>
                    <Text style={styles.emotionText}>
                        How I'm feeling today:
                    </Text>
                    <View>
                    {props.emotion === 'Anguish' ? <Anguish /> : <View />}
                    {props.emotion === 'Confused' ? <Confused /> : <View />}
                    {props.emotion === 'Neutral' ? <Neutral /> : <View />}
                    {props.emotion === 'SlightSmile' ? <SlightSmile /> : <View />}
                    {props.emotion === 'Smile' ? <Smile /> : <View />}
                    {props.emotion === '' ? <Neutral /> : <View />}
                    </View>
                </View>

                <View style={styles.starContainer}>
                    <Text style={styles.starText}>10 Stars</Text>
                    <Star />
                </View>

                <View style={styles.buddy}>
                    {props.pet === 'Dog' ? <Dog /> : <View />}
                    {props.pet === 'Cat' ? <Cat /> : <View />}
                    {props.pet === 'Panda' ? <Panda /> : <View />}
                </View>

               
                <TouchableOpacity onPress={signout}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.signoutText}>SIGN OUT</Text> 
                    </View>
                </TouchableOpacity>
                
            </View>
            {emotionHist
                ? (
                    <Modal animationType="slide" transparent={false}>
                        <CalendarHistory closeModal={() => setEmotionHist(false)} />
                    </Modal>
                    )
                    : <View />
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal:20,
    },

    navigation: {
        height: '5%',
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: '5%',
    },

    userInfo: {
        height: '10%',
        marginTop: '7%',
    },

    userName: {
        fontSize: 30,
        fontFamily: 'DMSans_Medium',
        color: '#363D4F',
    },

    emotionContainer: {
        height:'5%',
        flexDirection:'row',
        alignItems: 'center',
    },

    emotionText: {
        fontSize: 18,
        fontFamily: 'DMSans_Regular',
        color: '#363D4F',
        paddingRight: 10,
    },

    starContainer: {
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    starText: {
        paddingRight: 10,
        fontSize: 18,
        fontFamily: 'DMSans_Regular',
        color: '#363D4F',
    }, 

    buddy: {
        height: '30%',
        aspectRatio: 1,
        margin: 60,
    },

    buttonContainer: {
        backgroundColor: '#667BA4',
        height:55,
        width:'45%',
        marginTop: '5%',
        alignSelf:'center',
        borderRadius:13,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    signoutText: {
        fontSize: 15,
        letterSpacing: 1.5,
        color: '#FFFF',
        fontFamily: 'DMSans_Medium',
    },
})

const mapStateToProps = (state) => (
    {
      pet: state.buddy.pet,
      emotion: state.emotion.today
    }
  );
  
export default connect(mapStateToProps, { signoutUser, fetchBuddy, fetchEmotion })(UserProfile);
