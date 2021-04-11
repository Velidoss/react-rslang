import * as React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: theme.spacing(1),
    overflow: 'hidden',

    '&:hover $image': {
      transform: 'scale(1.2)',
    },
  },

  image: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 200ms ease',

    '&::after': {
      position: 'absolute',
      top: '10rem',
      left: '10rem',
      content: ({ title }) => title,
    },
  },
}));

const NavCard = ({
  className, title, path, img,
}) => {
  const classes = useStyles({ title });

  return (
    <Link
      component={RouterLink}
      to={path}
      className={clsx(classes.box, className)}
    >
      <img
        src={img}
        alt={title}
        className={classes.image}
      />
    </Link>
  );
};

NavCard.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default NavCard;
