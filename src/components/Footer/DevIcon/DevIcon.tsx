import * as React from 'react';
import {
  Box,
  Link,
  Typography,
} from '@material-ui/core';
//
import GitHubIcon from '@material-ui/icons/GitHub';
//
import styles from './DevIcon.style';

interface DevIconProps {
  name: string;
}

const DevIcon: React.FC<DevIconProps> = ({ name }) => {
  const classes = styles();

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

export { DevIcon };
