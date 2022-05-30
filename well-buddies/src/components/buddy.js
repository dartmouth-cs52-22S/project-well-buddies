import React, { Component, componentDidMount, useState } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { fetchBuddy, setNewBuddy } from '../state/actions/buddy';
import Cat from '../assets/img/cat/cat';
import Dog from '../assets/img/dog/dog';
import Panda from '../assets/img/panda/panda';
import CatOption from '../assets/img/cat/cat-option';
import DogOption from '../assets/img/dog/dog-option';
import PandaOption from '../assets/img/panda/panda-option';
import CatChosen from '../assets/img/cat/cat-chosen';
import DogChosen from '../assets/img/dog/dog-chosen';
import PandaChosen from '../assets/img/panda/panda-chosen';
import RegularText from './custom/regular_text';
import BoldText from './custom/bold_text';
import EditIcon from '../assets/img/edit';

class Buddy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: '',
      pet: this.props.pet,
    };
  }

  editMode = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }));
  };

  // eslint-disable-next-line react/no-arrow-function-lifecycle
  componentDidMount = async () => { await this.props.fetchBuddy(); };

  onInputChangeName = (newName) => {
    this.setState({ name: newName });
  };

  render() {
    if (this.state.isEditing === false) {
      return (
        <SafeAreaView style={{ backgroundColor: '#F6F6EE' }}>
          <View style={styles.container}>
            <View style={styles.editIcon}>
              <TouchableOpacity style={styles.iconContainer} onPress={() => { this.editMode(); }}>
                <EditIcon />
              </TouchableOpacity>
            </View>
            <View style={styles.header}>
              <RegularText>
                <Text style={styles.name}>
                  {this.props.petName}
                </Text>
              </RegularText>
            </View>
            <View style={styles.pet}>
              {this.props.pet === 'Dog' ? <Dog /> : <View />}
              {this.props.pet === 'Cat' ? <Cat /> : <View />}
              {this.props.pet === 'Panda' ? <Panda /> : <View />}
            </View>

            <View style={styles.body}>
              <View style={styles.petDetails}>
                <BoldText><Text style={styles.details}>Age:</Text></BoldText>
                <RegularText>
                  <Text style={styles.details}> 10 days</Text>
                </RegularText>
              </View>
              <View style={styles.petDetails}>
                <BoldText><Text style={styles.details}>Birthday:</Text></BoldText>
                <RegularText>
                  <Text style={styles.details}> Birthday: May 10, 20</Text>
                </RegularText>
              </View>
              <View style={styles.petDetails}>
                <BoldText><Text style={styles.details}>Favorite Wellness Activities: </Text></BoldText>
                <RegularText>
                  <Text style={styles.details}>Taking walks, cleaning room</Text>
                </RegularText>
              </View>
            </View>
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.headerEdit}>
            <Text style={styles.headerEdit}>Edit Buddy Profile</Text>
          </View>
          <View style={styles.pet}>
            {this.props.pet === 'Dog' ? <Dog /> : <View />}
            {this.props.pet === 'Cat' ? <Cat /> : <View />}
            {this.props.pet === 'Panda' ? <Panda /> : <View />}
          </View>
          <View style={styles.bodyEdit}>
            <Text style={styles.editName}>Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={this.onInputChangeName}
              value={this.state.name}
              placeholder="Name"
            />
            <View style={styles.buddyChange}>
              <Text style={styles.editChange}>Change Buddy</Text>
            </View>
            <View style={styles.buddyOption}>
              {/* replace all with head I'm just lazy */}
              <TouchableOpacity style={{ margin: 20 }} onPress={() => { this.setState({ pet: 'Dog' }); }}>
                {this.state.pet === 'Dog' ? <DogChosen /> : <DogOption />}
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 20 }} onPress={() => { this.setState({ pet: 'Cat' }); }}>
                {this.state.pet === 'Cat' ? <CatChosen /> : <CatOption />}
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: 20 }} onPress={() => { this.setState({ pet: 'Panda' }); }}>
                {this.state.pet === 'Panda' ? <PandaChosen /> : <PandaOption />}
              </TouchableOpacity>
            </View>
            <Pressable style={styles.button} onPress={() => { this.editMode(); }}>
              <Text style={styles.buttonTitle}>Save</Text>
            </Pressable>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  editChange: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  petDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  buddyOption: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyEdit: {
    alignItems: 'flex-start',
  },
  editName: {
    fontSize: 16,
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
  button: {
    marginTop: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 2,
    marginLeft: 90,

  },
  input: {
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: 'white',
    height: 40,
    width: 270,
    padding: 10,
  },
  container: {
    // flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F6F6EE',
  },
  name: {
    fontSize: 35,
    color: '#363D4F',
  },
  editIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 30,
    paddingTop: 30,
  },
  body: {
    alignItems: 'flex-start',
    marginLeft: 60,
  },
  details: {
    fontSize: 20,
  },
  header: {
    fontSize: 100,
    padding: 30,
  },
  headerEdit: {
    marginTop: -10,
    fontSize: 30,
    marginBottom: 10,
  },
  pet: {
    height: '40%',
    aspectRatio: 1,
    margin: 30,
  },

});

const mapStateToProps = (state) => (
  {
    pet: state.buddy.pet,
    petName: state.buddy.petName,
  }
);

export default connect(mapStateToProps, { fetchBuddy, setNewBuddy })(Buddy);
