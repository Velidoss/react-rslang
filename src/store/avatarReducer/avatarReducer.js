import {
  AVATAR_REQUEST,
  AVATAR_SUCCESS,
  AVATAR_FAILURE,
} from './avatarReducerActionTypes';

const initialState = {
  isReady: false,
  isLoading: false,
  isError: false,
  errorComponentProps: null,
};

const avatarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
    case AVATAR_REQUEST: {
      return {
        isReady: false,
        isLoading: true,
        isError: false,
        errorComponentProps: null,
      };
    }
    case AVATAR_SUCCESS: {
      return {
        isReady: true,
        isLoading: false,
        isError: false,
        errorComponentProps: null,
      };
    }
    case AVATAR_FAILURE: {
      return {
        isReady: false,
        isLoading: false,
        isError: true,
        errorComponentProps: { message: payload },
      };
    }
  }
};

export default avatarReducer;
