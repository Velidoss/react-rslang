import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './loginReducerActions';

const initialState = {
  isReady: false,
  isLoading: false,
  isError: false,
};

const loginReducer = (state = initialState, { type }) => {
  switch (type) {
    default: {
      return state;
    }
    case LOGIN_REQUEST: {
      return {
        isReady: false,
        isLoading: true,
        isError: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        isReady: true,
        isLoading: false,
        isError: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        isReady: false,
        isLoading: false,
        isError: true,
      };
    }
  }
};

export default loginReducer;
