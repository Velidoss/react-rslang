import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const PuzzleResult = ({ right, wrong, eraseGameState }) => {
  const calculatePercentage = (x, y) => ((x / (x + y)) * 100).toFixed(2);

  return (
    <div>
      <div>{`${calculatePercentage(right, wrong)}%`}</div>
      <div>{`Right: ${right}`}</div>
      <div>{`Wrong: ${wrong}`}</div>
      <NavLink to="/minigames">
        <Button onClick={eraseGameState}>
          Другие мини-игры
        </Button>
      </NavLink>
      <Button onClick={eraseGameState}>
        Сыграть еще раз
      </Button>
    </div>
  );
};

PuzzleResult.propTypes = {
  right: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
  eraseGameState: PropTypes.func.isRequired,
};

export default PuzzleResult;
