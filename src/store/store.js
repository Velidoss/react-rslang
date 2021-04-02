import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import savannahReducer from './savannahReducer/savannahReducer';
import textBookReducer from './textBookReducer/textBookReducer';

const store = createStore(combineReducers(
  { savannahReducer, textBookReducer },
), composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
