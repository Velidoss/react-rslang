import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './registerReducerActionTypes';

const initialState = {
  isReady: false,
  isLoading: false,
  isError: false,
  errorComponentProps: null,
};

const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
    case REGISTER_REQUEST: {
      return {
        isReady: false,
        isLoading: true,
        isError: false,
        errorComponentProps: null,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        isReady: true,
        isLoading: false,
        isError: false,
        errorComponentProps: null,
      };
    }
    case REGISTER_FAILURE: {
      return {
        isReady: false,
        isLoading: false,
        isError: true,
        errorComponentProps: {
          message: payload,
        },
      };
    }
  }
};

export default registerReducer;
