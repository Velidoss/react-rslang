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
const failure = (message) => ({ type: LOGIN_FAILURE, payload: message });

const sendData = (data) => axios({
  method: 'post',
  url: `${ApiUrl}${SIGN_IN}`,
  data,
  headers: { 'Content-Type': 'multipart/form-data' },
});

export const loginAC = (data) => (dispatch) => {
  dispatch(request());

  return sendData(data)
    .then((res) => {
      if (res.ok === false) {
        throw new Error();
      }

      const { data: { token, refreshToken } } = res;

      dispatch(success());

      return { token, refreshToken };
    })
    .catch((err) => {
      dispatch(failure(err.message));
      return null;
    });
};
