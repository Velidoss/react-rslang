import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const Buttons = ({
  isGameActive, checkIsAnswerRight, checkButton, resetGame,
}) => (
  <div className="buttons__block">
    {
      isGameActive
        ? (
          <Button
            onClick={checkIsAnswerRight}
            variant="contained"
            color="secondary"
            ref={checkButton}
          >
            Проверить
          </Button>
        ) : (
          <Button
            onClick={resetGame}
            variant="contained"
            color="secondary"
            className="button"
          >
            Перезапустить игру
          </Button>
        )
    }
  </div>
);

Buttons.propTypes = {
  isGameActive: PropTypes.bool.isRequired,
  checkIsAnswerRight: PropTypes.func.isRequired,
  checkButton: PropTypes.instanceOf(Object).isRequired,
  resetGame: PropTypes.func.isRequired,
};

export default Buttons;
