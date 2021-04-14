import * as React from 'react';
import PropTypes from 'prop-types';
import Image from 'material-ui-image';
//
import DataAccessConstants from '../../../../constants/DataAccessConstants';
//
import styles from './WordImage.style';

const { ApiUrl } = DataAccessConstants;

const WordImage = ({ imgSrc }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Image
        src={`${ApiUrl}/${imgSrc}`}
        alt="illustration"
        cover="true"
      />
    </div>
  );
};

WordImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export { WordImage };
