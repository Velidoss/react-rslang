import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import savannahReducer from './savannahReducer/savannahReducer';

const store = createStore(combineReducers({ savannahReducer }), composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
