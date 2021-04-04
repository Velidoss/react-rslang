import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import savannahReducer from './savannahReducer/savannahReducer';
import loginReducer from './loginReducer/loginReducer';
import textBookReducer from './textBookReducer/textBookReducer';
import userWordsReducer from './userWordsReducer/userWordsReducer';

const store = createStore(combineReducers(
  {
    savannahReducer, textBookReducer, loginReducer, userWordsReducer,
  },
), composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
