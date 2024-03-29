import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CLIENT_ID_IOS = '301956188397-rtuq8kgubluo5ismq4g9pq4cn9bag7ul.apps.googleusercontent.com';

export const signIn = async () => {
  try {
    GoogleSignin.configure({
      iosClientId: CLIENT_ID_IOS,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });
    await GoogleSignin.hasPlayServices();
    const userObject = await GoogleSignin.signIn();
    const token = await GoogleSignin.getTokens();
    addScope();
    await AsyncStorage.setItem('googleAccessCode', token.accessToken);
    await AsyncStorage.setItem('googleIdToken', userObject.idToken);
    return userObject;
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      return 'cancelled';
    }
    return null;
  }
};

export const signOut = async () => {
  try {
    await AsyncStorage.removeItem('googleIdToken');
    await AsyncStorage.removeItem('googleAccessCode');
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (error) {
  }
};

export const addScope = async () => {
  try {
    await GoogleSignin.addScopes({ scopes: ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events'] });
  } catch (error) {
    throw new Error(`error in adding scope: ${error}`);
  }
};
