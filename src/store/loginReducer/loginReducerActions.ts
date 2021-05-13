import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
//
import DataAccessConstants from '../../constants/DataAccessConstants';
import { RootState } from '../store';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './loginReducerActionTypes';

const {
  ApiUrl,
  ApiEndPoints: { SIGN_IN },
} = DataAccessConstants;

const request = () => ({ type: LOGIN_REQUEST });
const success = () => ({ type: LOGIN_SUCCESS });
const failure = (message: string) => ({ type: LOGIN_FAILURE, payload: message });

const sendData = (data: FormData) =>
  axios({
    data,
    method: 'post',
    url: `${ApiUrl}${SIGN_IN}`,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const loginAC: any = (
    data: FormData
  ): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch): Promise<any> => {
  dispatch(request());

  return sendData(data)
    .then((res: any) => {
      if (res.ok === false) {
        throw new Error();
      }

      const {
        data: { token, refreshToken, name, userId, avatar },
      } = res;

      dispatch(success());

      return {
        token,
        refreshToken,
        name,
        userId,
        avatar,
      };
    })
    .catch((err) => {
      const message = err?.response?.data || err.message;

      dispatch(failure(message));
      return null;
    });
};
