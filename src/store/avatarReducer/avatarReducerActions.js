import axios from 'axios';
//
import DataAccessConstants from '../../constants/DataAccessConstants';
import { AVATAR_REQUEST, AVATAR_SUCCESS, AVATAR_FAILURE } from './avatarReducerActionTypes';

const {
  ApiUrl,
  ApiEndPoints: { AVATAR_UPLOAD },
} = DataAccessConstants;

const request = () => ({ type: AVATAR_REQUEST });
const success = () => ({ type: AVATAR_SUCCESS });
const failure = (message) => ({ type: AVATAR_FAILURE, payload: message });

const sendData = (userId, token, data) =>
  axios({
    data,
    method: 'put',
    url: `${ApiUrl}${AVATAR_UPLOAD}${userId}`,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });

export const avatarUpdateAC = (userId, token, data) => (dispatch) => {
  dispatch(request());

  return sendData(userId, token, data)
    .then((res) => {
      if (res.ok === false) {
        throw new Error();
      }

      dispatch(success());

      const {
        data: { avatar },
      } = res;

      return avatar;
    })
    .catch((err) => {
      const message = err?.response?.data || err.message;

      dispatch(failure(message));
      return null;
    });
};
