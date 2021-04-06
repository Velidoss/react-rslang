import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './loginReducerActions';

const initialState = {
  isReady: false,
  isLoading: false,
  isError: false,
  errorComponentProps: null,
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
    case LOGIN_REQUEST: {
      return {
        isReady: false,
        isLoading: true,
        isError: false,
        errorComponentProps: null,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        isReady: true,
        isLoading: false,
        isError: false,
        errorComponentProps: null,
      };
    }
    case LOGIN_FAILURE: {
      return {
        isReady: false,
        isLoading: false,
        isError: true,
        errorComponentProps: { message: payload },
      };
    }
  }
};

export default loginReducer;
