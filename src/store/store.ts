import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//
import savannahReducer from './savannahReducer/savannahReducer';
import loginReducer from './loginReducer/loginReducer';
import registerReducer from './registerReducer/registerReducer';
import avatarReducer from './avatarReducer/avatarReducer';
import textBookReducer from './textBookReducer/textBookReducer';

const store = createStore(
  combineReducers({
    savannahReducer,
    textBookReducer,
    avatar: avatarReducer,
    login: loginReducer,
    register: registerReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
