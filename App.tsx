/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Main from './src/views/Main';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './src/redux/reducers/index';

const store = createStore(rootReducer);

const App: () => React.ReactNode = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
