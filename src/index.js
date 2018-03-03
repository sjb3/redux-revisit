import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';

import thunk from 'redux-thunk';

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
  allReducers,
  {
    products: [{ name: 'iPhone' }],
    user: 'lulu'
  },
  allStoreEnhancers
);


const updateUserAction = {
  type: 'updateUser',
  payload: {
    products: [{ name: 'shit'}],
    user: 'JOJO'
  }
};

store.dispatch(updateUserAction);

ReactDOM.render(<Provider store={store}><App aRandomProps='whatever'/></Provider>, document.getElementById('root'));
registerServiceWorker();
