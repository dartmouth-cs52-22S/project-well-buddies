import { Dimensions, StyleSheet } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
  landingPage: {
    flexDirection: 'column',
    height: Dimensions.get('window').height * 0.45,
    width: Dimensions.get('window').width * 0.6,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 77,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
  },
  signIn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInTop: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: 200,
    padding: 20,
    backgroundColor: 'green',
  },
  welcome: {
    color: '#667BA4',
    fontSize: 26,
  },
  title: {
    color: '#667BA4',
    fontSize: 32,
    fontWeight: '700',
  },
  signInText: {
    color: '#667BA4',
    fontSize: 12,
  },
  nameContainer: {
    height: Dimensions.get('window').height - 177,
  },
  name: {
    marginTop: 60,
    padding: 16,
  },
  nameText: {
    color: '#363D4F',
    fontWeight: '500',
    fontSize: 26,
    paddingBottom: 18,
  },
  nameTextInput: {
    backgroundColor: '#FFFFFF',
    height: 60,
    borderRadius: 8,
    padding: 16,
  },
  buddy: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
  pet: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    padding: 70,
  },
  activities: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  activity: {
    width: Dimensions.get('window').width - 32,
    height: 46,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  activityText: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: '#767E95',
    fontSize: 16,
  },
  activityChosen: {
    width: Dimensions.get('window').width - 32,
    height: 46,
    marginVertical: 8,
    backgroundColor: '#F2F7F9',
    borderColor: '#AABBCB',
    borderWidth: 1,
    borderRadius: 8,
  },
  activityChosenText: {
    paddingVertical: 11,
    paddingHorizontal: 15,
    color: '#767E95',
    fontSize: 16,
  },
});
