import * as React from 'react';
import { Typography } from '@material-ui/core';
//
import getPageStats from './getPageStats';
import ITextBookWord from '../../../../interfaces/ITextBookWord';
import IUserWord from './../../../../interfaces/IUserWord';

interface PageStatsProps {
  words: ITextBookWord[];
  userWords: IUserWord[];
}

const PageStats: React.FC<PageStatsProps> = React.memo(({ words, userWords }) => (
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

export { PageStats };
