import axios from 'axios';
//
import DataAccessConstants from '../../constants/DataAccessContants';

const {
  ApiUrl,
  ApiEndPoints: {
    REGISTER,
  },
} = DataAccessConstants;

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

const request = () => ({ type: REGISTER_REQUEST });
const success = () => ({ type: REGISTER_SUCCESS });
const failure = (message) => ({ type: REGISTER_FAILURE, payload: message });

const sendData = (data) => axios({
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
        data: { email, name },
      } = res;

      dispatch(success());

      return { email, name };
    })
    .catch((err) => {
      dispatch(failure(err.message));
      return null;
    });
};
