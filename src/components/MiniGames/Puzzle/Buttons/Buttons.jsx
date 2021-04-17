import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';

const Buttons = ({
  isGameActive, checkIsAnswerRight, checkButton, resetGame, rightQuantity, wrongQuantity,
}) => (
  <>
    {
      isGameActive
        ? (
          <>
            <Button
              onClick={checkIsAnswerRight}
              variant="contained"
              color="secondary"
              ref={checkButton}
              className="button"
            >
              Проверить
            </Button>
            <Typography>
              <span>Верных ответов: </span>
              <span>{rightQuantity}</span>
            </Typography>
            <Typography>
              <span>Неверных ответов: </span>
              <span>{wrongQuantity}</span>
            </Typography>
          </>
        ) : (
          <Button
            onClick={resetGame}
            variant="contained"
            color="secondary"
            className="button"
          >
            Сыграть еще раз
          </Button>
        )
    }
  </>
);

Buttons.propTypes = {
  isGameActive: PropTypes.bool.isRequired,
  checkIsAnswerRight: PropTypes.func.isRequired,
  checkButton: PropTypes.instanceOf(Object).isRequired,
  resetGame: PropTypes.func.isRequired,
  rightQuantity: PropTypes.number.isRequired,
  wrongQuantity: PropTypes.number.isRequired,
};

export default Buttons;
