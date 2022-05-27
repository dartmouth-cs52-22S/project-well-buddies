import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  landingPage: {
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    justifyContent: 'space-around',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
});
