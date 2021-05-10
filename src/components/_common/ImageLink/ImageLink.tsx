import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { Link, Typography } from '@material-ui/core';
//
import styles from './ImageLink.style';

interface ImageLinkProps {
  className: string;
  title: string;
  path: {
    pathname: string,
    state: { 
      group: number, 
      page: number,
      linkSrc: string, 
    },
  };
  img: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({
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

export { ImageLink };
