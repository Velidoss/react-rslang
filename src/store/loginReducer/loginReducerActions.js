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
