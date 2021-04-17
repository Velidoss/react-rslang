import * as React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
//
import { ImageLink } from '../../_common';
//
import { miniGameLinksConfig } from '../../../constants/textBookConstants';
//
import styles from './MiniGameLinks.style';

const MiniGameLinks = ({ group = 0, page = 0, linkSrc = 'dictionary' }) => {
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

MiniGameLinks.propTypes = {
  group: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  linkSrc: PropTypes.string.isRequired,
};

export { MiniGameLinks };
