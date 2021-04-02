import React, { useEffect } from 'react';
import { Container, Button } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const SprintActive = ({
  questionsArr, mixedAnswersArr, questionNum, setQuestionNum, answersState, setAnswersState,
  finishGame,
}) => {
  const showNextQuestion = () => {
    if (questionsArr.length > questionNum + 1) {
      setQuestionNum(questionNum + 1);
    } else {
      finishGame();
    }
  };

  const checkAnswer = (answer) => {
    const isCorrect = questionsArr[questionNum].word === mixedAnswersArr[questionNum].word;
    if ((isCorrect && answer === 'right') || (!isCorrect && answer === 'wrong')) {
      setAnswersState({
        ...answersState,
        right: [...answersState.right, questionsArr[questionNum].word],
      });
    } else if ((!isCorrect && answer === 'right') || (isCorrect && answer === 'wrong')) {
      setAnswersState({
        ...answersState,
        wrong: [...answersState.wrong, questionsArr[questionNum].word],
      });
    }

    showNextQuestion();
  };

  const handleKeydown = (e) => {
    if (e.key === 'ArrowRight') {
      checkAnswer('right');
    } else if (e.key === 'ArrowLeft') {
      checkAnswer('wrong');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [questionNum]);

  return (
    <Container>
      <div>
        {questionsArr[questionNum].word}
      </div>
      <div>
        {mixedAnswersArr[questionNum].translation}
      </div>
      <Button onClick={() => checkAnswer('wrong')}>
        Неверно
      </Button>
      <Button onClick={() => checkAnswer('right')}>
        Верно
      </Button>
    </Container>
  );
};

SprintActive.propTypes = {
  questionsArr: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  mixedAnswersArr: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  questionNum: PropTypes.number.isRequired,
  setQuestionNum: PropTypes.func.isRequired,
  answersState: PropTypes.shape({
    right: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    wrong: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  setAnswersState: PropTypes.func.isRequired,
  finishGame: PropTypes.func.isRequired,
};

export default SprintActive;
