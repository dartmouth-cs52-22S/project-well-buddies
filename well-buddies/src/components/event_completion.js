import React, { useEffect } from 'react';
import {
  SafeAreaView, StyleSheet, View, ImageBackground, Dimensions, Text, TouchableOpacity,
} from 'react-native';
import constants from '../constants'
import { connect } from 'react-redux';
import Apple from '../assets/img/fruits/apple';
import { fetchBuddy } from '../state/actions/buddy';
import { fetchActivities } from '../state/actions/activity';
import DogCompletion from '../assets/img/dog/dog-completion';
import CatCompletion from '../assets/img/cat/cat-completion';
import PandaCompletion from '../assets/img/panda/panda-completion';
import CloseIcon from '../assets/img/tabIcons/close';
import Star from '../assets/img/star';

function EventCompletion(props) {
  useEffect(() => {
    async function fetchData() {
      await props.fetchBuddy();
      await props.fetchActivities();
    }
    fetchData();
  }, []);
  console.log(list_activities);
  return (
    <TouchableOpacity onPress={()=>{props.closeModal();}}>
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImg} resizeMode="cover" source={require('../assets/img/background_completion.png')}>
          <View style={styles.IconContainer}>
            <CloseIcon style={styles.closeIcon} />
          </View>

          <View style={styles.imagecontainer}>
            <View style={styles.fruit}>
              <Apple />
            </View>
            <View style={styles.buddy}>
              {props.pet === 'Dog' ? <DogCompletion /> : <View />}
              {props.pet === 'Cat' ? <CatCompletion /> : <View />}
              {props.pet === 'Panda' ? <PandaCompletion /> : <View />}
            </View>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textLarge}>Yay!</Text>
            <Text style={styles.textSmall}>Your buddy had an apple</Text>
            <Text style={styles.textSmall}>and is growing!</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.starContainer}>
            {
                        constants.map((act_list) => {
                          if (act_list.title == props.activity){
                            return (<Text>{act_list.duration}/5</Text>);
                        }})
                    }
              <Text style={styles.textStar}>+ 10 Stars</Text>
              <Star />
            </View>
          </TouchableOpacity>
        </ImageBackground>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    height: Dimensions.get('screen').height,
    top: -50,
  },

  IconContainer: {
    height: '12%',
    justifyContent: 'flex-end',
    paddingLeft: 20,
  },

  imagecontainer: {
    height: '30%',
    marginTop: '30%',
    paddingTop: '10%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  fruit: {
    height: '100%',
    width: '35%',
    paddingLeft: '10%',
    paddingTop: '13%',
  },

  buddy: {
    aspectRatio: 1,
    marginLeft: 40,
    marginBottom: 40,
  },

  textContainer: {
    height: '15%',
    marginVertical: '8%',
    paddingLeft: '15%',
  },

  textLarge: {
    fontSize: 28,
    fontFamily: 'DMSans_Medium',
    color: '#363D4F',
    marginVertical: '5%',
  },

  textSmall: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'DMSans_Regular',
    color: '#363D4F',
  },

  starContainer: {
    backgroundColor: '#363D4F',
    height: 60,
    width: '50%',
    marginTop: '5%',
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStar: {
    fontSize: 18,
    color: '#FFFF',
    paddingRight: 10,
  },
});

const mapStateToProps = (state) => (
  {
    pet: state.buddy.pet,
  }
);

export default connect(mapStateToProps, { fetchBuddy })(EventCompletion);
