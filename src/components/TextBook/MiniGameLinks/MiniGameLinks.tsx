import * as React from 'react';
import { Box } from '@material-ui/core';
//
import { ImageLink } from '../../_common';
//
import { miniGameLinksConfig } from '../../../constants/textBookConstants';
//
import styles from './MiniGameLinks.style';

interface MimiGameLinks {
  group: number;
  page: number;
  linkSrc: string;
}

const MiniGameLinks: React.FC<MimiGameLinks> = ({ group = 0, page = 0, linkSrc = 'dictionary' }) => {
  const classes = styles();

  return (
    <Box className={classes.root}>
      {miniGameLinksConfig.map((obj) => (
        <ImageLink
          {...obj}
          path={{
            pathname: obj.path || '/sprint',
            state: { group, page, linkSrc },
          }}
          key={obj.title}
        />
      ))}
    </Box>
  );
};

export { MiniGameLinks };
