import { registerRootComponent } from 'expo';
import React, { useState, useEffect, useCallback } from 'react';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { View } from 'react-native';
import App from './App';
import store from './store/configureStore';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);

function Index(props) {
  // app is ready code from https://docs.expo.dev/versions/latest/sdk/splash-screen/
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          DMSans_Regular: require('./src/assets/fonts/DMSans-Regular.ttf'),
          DMSans_Medium: require('./src/assets/fonts/DMSans-Medium.ttf'),
          DMSans_Bold: require('./src/assets/fonts/DMSans-Bold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      {/* <View onLayout={onLayoutRootView}> */}
        <App />
      {/* </View> */}
    </Provider>
  );
}

registerRootComponent(
  Index,
);
