import {
  REQUEST,
  SUCCESS,
  FAILURE,
} from './textBookStatsReducerActionTypes';
//
import getAggregatedWords from '../../api/getAggregatedWords';

const request = () => ({ type: REQUEST });
const success = (data) => ({ type: SUCCESS, payload: data });
const failure = (message) => ({ type: FAILURE, payload: message });

export const getTextBookStatsAC = (userId, token) => (dispatch) => {
  dispatch(request());

  return getAggregatedWords(userId, token)
    .then((res) => {
      if (res.statusText !== 'OK') {
        throw new Error('Something went wrong');
      }

      const { data } = res;

      console.log(data);

      dispatch(success(data));
    })
    .catch((err) => {
      dispatch(failure(err.message));
    });
};
