import axios from 'axios';
import DataAccessConstants from '../../constants/DataAccessContants';

const {
  ApiUrl,
  ApiEndPoints: {
    SIGN_IN,
  },
} = DataAccessConstants;

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const request = () => ({ type: LOGIN_REQUEST });
const success = () => ({ type: LOGIN_SUCCESS });
const failure = () => ({ type: LOGIN_FAILURE });

const sendData = (data) => axios.post(`${ApiUrl}${SIGN_IN}`, data);

export const loginAC = (data) => (dispatch) => {
  dispatch(request());

  return sendData(data)
    .then((res) => {
      if (res.ok === false) {
        throw new Error();
      }

      return res.json();
    })
    .then((json) => {
      dispatch(success());
      return json;
    })
    .catch(() => {
      dispatch(failure());
      return {};
    });
};
