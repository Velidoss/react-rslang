import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Link,
  Avatar,
  Typography,
  makeStyles,
} from '@material-ui/core';
//
import { useAuth } from '../../../../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    color: theme.palette.primary.contrastText,
    paddingRight: '1rem',
    width: '7rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const HeaderProfile = () => {
  const {
    auth: {
      name, avatar,
    },
  } = useAuth();
  const classes = useStyles();

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

export default React.memo(HeaderProfile);
