import * as React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { Link, Typography } from '@material-ui/core';
//
import styles from './ImageLink.style';

const ImageLink = ({
  className,
  title,
  path,
  img,
}) => {
  const classes = styles();

  return (
    <Link
      to={path}
      component={RouterLink}
      className={clsx(classes.root, className)}
    >
      <div className={clsx(classes.overlay, classes.content)} />
      <Typography variant="h6" className={classes.text}>{title}</Typography>
      <img src={img} alt={title} className={clsx(classes.image, classes.content)} />
    </Link>
  );
};

ImageLink.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export { ImageLink };
