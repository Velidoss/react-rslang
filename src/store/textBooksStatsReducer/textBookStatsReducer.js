import {
  REQUEST,
  SUCCESS,
  FAILURE,
} from './textBookStatsReducerActionTypes';

const initialState = {
  isReady: false,
  isLoading: false,
  isError: false,
  data: null,
  errorComponentProps: null,
};

const textBookStatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
    case REQUEST: {
      return {
        isReady: false,
        isLoading: true,
        isError: false,
        errorComponentProps: null,
        data: null,
      };
    }
    case SUCCESS: {
      return {
        isReady: true,
        isLoading: false,
        isError: false,
        errorComponentProps: null,
        data: payload,
      };
    }
    case FAILURE: {
      return {
        isReady: false,
        isLoading: false,
        isError: true,
        errorComponentProps: { message: payload },
        data: null,
      };
    }
  }
};

export default textBookStatsReducer;
