import axios from 'axios';
import { AnyAction } from 'redux';
//
import DataAccessConstants from '../../constants/DataAccessConstants';
import { RootState } from '../store';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './registerReducerActionTypes';
import { ThunkAction } from 'redux-thunk';

const {
  ApiUrl,
  ApiEndPoints: { REGISTER },
} = DataAccessConstants;

const request = () => ({ type: REGISTER_REQUEST });
const success = () => ({ type: REGISTER_SUCCESS });
const failure = (message: string) => ({ type: REGISTER_FAILURE, payload: message });

const sendData = (data: FormData) =>
  axios({
    method: 'post',
    url: `${ApiUrl}${REGISTER}`,
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const registerAC: any = (
    data: FormData
  ): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch): Promise<any> => {
  dispatch(request());

  return sendData(data)
    .then((res: any) => {
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
