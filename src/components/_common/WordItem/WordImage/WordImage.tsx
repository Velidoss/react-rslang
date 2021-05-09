import * as React from 'react';
import Image from 'material-ui-image';
import { Typography } from '@material-ui/core';
//
import DataAccessConstants from '../../../../constants/DataAccessConstants';
//
import styles from './WordImage.style';

interface WordImageProps {
  imgSrc: string;
  isDifficult?: boolean;
}

const { ApiUrl } = DataAccessConstants;

const WordImage: React.FC<WordImageProps> = ({ imgSrc, isDifficult }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <Image src={`${ApiUrl}/${imgSrc}`} alt="illustration" cover />
      </div>
      {isDifficult && (
        <Typography color="error" variant="body2" align="center">
          сложное
        </Typography>
      )}
    </div>
  );
};

export { WordImage };
