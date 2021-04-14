import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//
import { NoAuthPlaceholder, Loader } from '../../_common';
//
import { useAuth } from '../../../contexts/AuthContext';
//
import { getTextBookStatsAC } from '../../../store/textBooksStatsReducer/textBookStatsReducerActions';
import textBookStatsSelector from '../../../store/selectors/textBookStatsSelector';
//
import styles from './TextBookStats.style';

const TextBookStats = () => {
  const dispatch = useDispatch();
  const classes = styles();
  const {
    isLoading,
    data,
  } = useSelector(textBookStatsSelector);
  const {
    auth: {
      userId,
      token,
    },
    isAuth,
  } = useAuth();

  React.useEffect(() => {
    if (userId && token) {
      dispatch(getTextBookStatsAC(userId, token));
    }
  }, []);

  return !isAuth
    ? <NoAuthPlaceholder />
    : (
      <>
        {isLoading && <Loader />}
        {data && <div className={classes.root}>Статистика по словарю</div>}
      </>
    );
};

export { TextBookStats };
