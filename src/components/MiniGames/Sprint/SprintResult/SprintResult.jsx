import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const SprintResult = ({ answersState, points, startGame }) => {
  const calcRes = (r = 0, w = 0) => ((r / (r + w)) * 100) || 0;
  const percentage = calcRes(answersState.right.length, answersState.wrong.length).toFixed(0);

  return (
    <div>
      <div>{`Верные ответы: ${answersState.right.join(', ') || 'нет'}.`}</div>
      <div>{`Неверные ответы: ${answersState.wrong.join(', ') || 'нет'}.`}</div>
      <div>{`Итого: ${percentage} / 100%.`}</div>
      <div>{`Очки: ${points}.`}</div>
      <NavLink to="/minigames">
        <Button>
          Другие мини-игры
        </Button>
      </NavLink>
      <Button onClick={startGame}>
        Сыграть еще раз
      </Button>
    </div>
  );
};

SprintResult.propTypes = {
  answersState: PropTypes.shape({
    right: arrayOf(PropTypes.string).isRequired,
    wrong: arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  points: PropTypes.number.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default SprintResult;
