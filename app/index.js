import React from 'react';

import {render} from 'react-dom';

import {Provider} from 'react-redux';

import {applyMiddleware, compose, createStore} from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/index';

import AppContainer from './containers/AppContainer';

var sagaMiddleware = createSagaMiddleware(),
  appStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

render(
  <Provider store={appStore}>
    <AppContainer/>
  </Provider>, document.getElementById('app'));
