import * as React from 'react';
import PropTypes from 'prop-types';
import Image from 'material-ui-image';
import { Typography } from '@material-ui/core';
//
import DataAccessConstants from '../../../../constants/DataAccessConstants';
//
import styles from './WordImage.style';

const { ApiUrl } = DataAccessConstants;

const WordImage = ({ imgSrc, isDifficult }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <Image
          src={`${ApiUrl}/${imgSrc}`}
          alt="illustration"
          cover="true"
        />
      </div>
      {isDifficult && <Typography color="error" variant="body2" align="center">сложное</Typography>}
    </div>
  );
};

WordImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  isDifficult: PropTypes.bool.isRequired,
};

export { WordImage };
