import axios from 'axios';
//
import DataAccessConstants from '../../constants/DataAccessContants';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './loginReducerActionTypes';

const {
  ApiUrl,
  ApiEndPoints: {
    SIGN_IN,
  },
} = DataAccessConstants;

const request = () => ({ type: LOGIN_REQUEST });
const success = () => ({ type: LOGIN_SUCCESS });
const failure = (message) => ({ type: LOGIN_FAILURE, payload: message });

const sendData = (data) => axios({
  data,
  method: 'post',
  url: `${ApiUrl}${SIGN_IN}`,
  headers: { 'Content-Type': 'multipart/form-data' },
});

export const loginAC = (data) => (dispatch) => {
  dispatch(request());

  return sendData(data)
    .then((res) => {
      if (res.ok === false) {
        throw new Error();
      }

      const {
        data: {
          token,
          refreshToken,
          name,
          userId,
        },
      } = res;

      dispatch(success());

      return {
        token, refreshToken, name, userId,
      };
    })
    .catch((err) => {
      dispatch(failure(err.message));
      return null;
    });
};
