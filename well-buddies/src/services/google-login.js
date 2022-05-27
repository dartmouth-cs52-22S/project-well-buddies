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
    console.log(userObject);
    console.log(token);
    /* setAccessToken(token.accessToken);
    setloggedIn(true);
    setuserInfo(userObject); */
    addScope();
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      console.log(error);
      alert('Cancel');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      alert('Signin in progress');
      console.log(error);
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      alert('PLAY_SERVICES_NOT_AVAILABLE');
      console.log(error);
      // play services not available or outdated
    } else {
      console.log(error);
      // some other error happened
    }
  }
};

export const signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    /* setloggedIn(false);
    setuserInfo([]); */
  } catch (error) {
    console.error(error);
  }
};

export const addScope = async () => {
  const scope = await GoogleSignin.addScopes({ scopes: ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events'] });
  console.log('add scpope', scope);
};
