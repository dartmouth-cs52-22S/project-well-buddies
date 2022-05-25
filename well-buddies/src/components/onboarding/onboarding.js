import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { styles } from './styles';
import Name from './name';
import Pet from './pet';
import Calm from './calm';
import Stress from './stress';
import SignUp from './signup';

const Onboarding = (props) => {
  const screens = ['Name', 'Pet', 'Calm', 'Stress', 'SignUp'];
  const [stage, setStage] = useState(screens[0]);

  return(
    <SafeAreaView>
      <KeyboardAvoidingView 
        keyboardVerticalOffset={10}
        behavior="position"
        style={{
          width: '100%', top: 0, left: 0, marginTop: 0
        }}
      >
        {/* top bar */}
        <View style={styles.topBar}>
          <TouchableOpacity><Text>Back</Text></TouchableOpacity>
          <TouchableOpacity><Text>Next</Text></TouchableOpacity>
        </View>
        <View>
          {stage === 'Name' ? (<Name/>) : (<View />)}
          {stage === 'Pet' ? (<Pet/>) : (<View />)}
          {stage === 'Calm' ? (<Calm/>) : (<View />)}
          {stage === 'Stress' ? (<Stress/>) : (<View />)}
          {stage === 'SignUp' ? (<SignUp/>) : (<View />)}
        </View>
        <View style={{ flexGrow: 100 }} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
  

}

// eventually connect to redux

export default Onboarding;