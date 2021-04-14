import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//
import savannahReducer from './savannahReducer/savannahReducer';
import loginReducer from './loginReducer/loginReducer';
import registerReducer from './registerReducer/registerReducer';
import avatarReducer from './avatarReducer/avatarReducer';
import textBookReducer from './textBookReducer/textBookReducer';
import textBookStatsReducer from './textBooksStatsReducer/textBookStatsReducer';

const store = createStore(combineReducers(
  {
    savannahReducer,
    textBookReducer,
    avatar: avatarReducer,
    login: loginReducer,
    register: registerReducer,
    textBookStats: textBookStatsReducer,
  },
), composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
