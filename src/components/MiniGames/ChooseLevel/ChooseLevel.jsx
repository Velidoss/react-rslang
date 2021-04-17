import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import miniGamesConstants from '../../../constants/miniGamesConstants';

const useStyles = makeStyles(() => ({
  chooseLevelBtn: {
    margin: '1rem',
  },
}));

const ChooseLevel = ({ gamePath, gameName, handleCloseModal }) => {
  const classes = useStyles();
  const getRandomKey = () => Math.random().toString();
  const randomPageNum = Math.floor(Math.random() * miniGamesConstants.pagesNum);

  return (
    <Container>
      <Typography variant="h5">
        {gameName}
      </Typography>
      <Typography variant="h6">
        Уровень сложности:
      </Typography>
      {Array(miniGamesConstants.groupsNum).fill(0).map((el, index) => (
        <NavLink
          to={{
            pathname: gamePath || '/sprint',
            state: { group: index, page: randomPageNum },
          }}
          key={getRandomKey()}
        >
          <Button
            key={getRandomKey()}
            variant="contained"
            color="secondary"
            className={classes.chooseLevelBtn}
            onClick={handleCloseModal}
          >
            {index + 1}
          </Button>
        </NavLink>
      ))}
    </Container>
  );
};

ChooseLevel.propTypes = {
  gamePath: PropTypes.string.isRequired,
  gameName: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default ChooseLevel;
