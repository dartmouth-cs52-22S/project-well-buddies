import { registerRootComponent } from 'expo';
import React from 'react';
// import { Provider } from 'react-redux';
// import React from 'react';
// import store from './store/configureStore';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/configureStore';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

// registerRootComponent(App);

function Index(props) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

registerRootComponent(
  Index,
);
