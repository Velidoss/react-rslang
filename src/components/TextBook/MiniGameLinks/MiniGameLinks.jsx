import * as React from 'react';
import { Box } from '@material-ui/core';
//
import { ImageLink } from '../../_common';
//
import { miniGameLinksConfig } from '../../../constants/textBookContants';
//
import styles from './MiniGameLinks.style';

const MiniGameLinks = () => {
  const classes = styles();

  return (
    <Box className={classes.root}>
      {miniGameLinksConfig.map((obj) => <ImageLink {...obj} key={obj.title} />)}
    </Box>
  );
};

export { MiniGameLinks };
