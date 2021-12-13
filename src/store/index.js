import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxWebsocket from '@giantmachines/redux-websocket';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reduxWebsocketMiddleware = reduxWebsocket();

const composedEnhancers = composeWithDevTools(
  applyMiddleware(sagaMiddleware, reduxWebsocketMiddleware)
);
const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./rootReducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
