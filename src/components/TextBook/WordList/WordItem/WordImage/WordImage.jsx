import * as React from 'react';
import PropTypes from 'prop-types';
import Image from 'material-ui-image';
//
import DataAccessContants from '../../../../../constants/DataAccessContants';
//
import styles from './WordImage.style';

const { ApiUrl } = DataAccessContants;

const WordImage = ({ imgSrc }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Image
        src={`${ApiUrl}/${imgSrc}`}
        alt="illustration"
        cover
      />
    </div>
  );
};

WordImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export { WordImage };
