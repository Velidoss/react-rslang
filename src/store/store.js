import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import savannahReducer from './savannahReducer/savannahReducer';
import loginReducer from './loginReducer/loginReducer';
import registerReducer from './registerReducer/registerReducer';
import textBookReducer from './textBookReducer/textBookReducer';

const store = createStore(combineReducers(
  {
    savannah: savannahReducer,
    textBook: textBookReducer,
    login: loginReducer,
    register: registerReducer,
  },
), composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
