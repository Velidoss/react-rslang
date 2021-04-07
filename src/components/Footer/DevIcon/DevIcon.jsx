import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Link,
  Typography,
  makeStyles,
} from '@material-ui/core';
//
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',

    '& :hover': {
      opacity: '0.7',
      textDecoration: 'none !important',
    },
  },
  icon: {
    [theme.breakpoints.down('md')]: {
      width: '16px',
      height: '16px',
    },
  },
}));

const DevIcon = ({ name }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Link
        href={`https://github.com/${name}`}
        className={classes.link}
        color="inherit"
      >
        <GitHubIcon className={classes.icon} />
        <Typography variant="body2">
          {`${name}`}
        </Typography>
      </Link>
    </Box>
  );
};

DevIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DevIcon;
