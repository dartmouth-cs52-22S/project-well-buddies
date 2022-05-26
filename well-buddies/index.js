import { registerRootComponent } from 'expo';
// import { Provider } from 'react-redux';
// import React from 'react';
// import store from './store/configureStore';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

registerRootComponent(App);

// registerRootComponent(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );
