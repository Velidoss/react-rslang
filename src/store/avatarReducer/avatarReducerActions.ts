import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
//
import DataAccessConstants from '../../constants/DataAccessConstants';
import { RootState } from '../store';
import { AVATAR_REQUEST, AVATAR_SUCCESS, AVATAR_FAILURE } from './avatarReducerActionTypes';

const {
  ApiUrl,
  ApiEndPoints: { AVATAR_UPLOAD },
} = DataAccessConstants;

const request = () => ({ type: AVATAR_REQUEST });
const success = () => ({ type: AVATAR_SUCCESS });
const failure = (message: string) => ({ type: AVATAR_FAILURE, payload: message });

const sendData = (userId:string, token: string, data: FormData) =>
  axios({
    data,
    method: 'put',
    url: `${ApiUrl}${AVATAR_UPLOAD}${userId}`,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });

export const avatarUpdateAC: any = (
    userId:string, token: string, data: FormData,
  ): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch): Promise<any> => {

  dispatch(request());

  return sendData(userId, token, data)
    .then((res: any) => { // response without ok ??
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
