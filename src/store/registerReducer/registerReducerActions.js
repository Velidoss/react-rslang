import axios from 'axios';
//
import DataAccessConstants from '../../constants/DataAccessConstants';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './registerReducerActionTypes';

const {
  ApiUrl,
  ApiEndPoints: { REGISTER },
} = DataAccessConstants;

const request = () => ({ type: REGISTER_REQUEST });
const success = () => ({ type: REGISTER_SUCCESS });
const failure = (message) => ({ type: REGISTER_FAILURE, payload: message });

const sendData = (data) =>
  axios({
    method: 'post',
    url: `${ApiUrl}${REGISTER}`,
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const registerAC = (data) => (dispatch) => {
  dispatch(request());

  return sendData(data)
    .then((res) => {
      if (res.ok === false) {
        throw new Error();
      }

      const {
        data: { email },
      } = res;

      dispatch(success());

      return email;
    })
    .catch((err) => {
      const message = err?.response?.data || err.message;

      dispatch(failure(message));
      return null;
    });
};
