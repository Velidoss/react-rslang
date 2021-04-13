import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Link,
  Avatar,
  Typography,
} from '@material-ui/core';
//
import { useAuth } from '../../../../contexts/AuthContext';
//
import styles from './HeaderProfile.style';

const HeaderProfile = () => {
  const {
    auth: {
      name, avatar,
    },
  } = useAuth();
  const classes = styles();

  return (
    <Link className={classes.root} component={RouterLink} to="/account">
      <Typography
        align="right"
        className={classes.text}
        variant="subtitle2"
      >
        {name}
      </Typography>
      <Avatar alt={name} src={avatar} />
    </Link>
  );
};

export { HeaderProfile };
