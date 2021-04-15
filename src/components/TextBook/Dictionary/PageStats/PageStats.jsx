import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
//
import getPageStats from './getPageStats';

const PageStats = React.memo(({ words, userWords }) => (
  <>
    {
      Object.entries(getPageStats(words, userWords)).map(([label, value]) => (
        <Typography key={label} variant="subtitle1">
          {`${label}: ${value}`}
        </Typography>
      ))
    }
  </>
));

PageStats.propTypes = {
  words: PropTypes.instanceOf(Array).isRequired,
  userWords: PropTypes.instanceOf(Array).isRequired,
};

export { PageStats };
