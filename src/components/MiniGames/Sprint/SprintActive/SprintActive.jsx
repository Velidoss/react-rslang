import React, { useState, useEffect } from 'react';
import { Container, Button } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const SprintActive = ({
  questionsArr, mixedAnswersArr, questionNum, setQuestionNum, answersState, setAnswersState,
  points, setPoints, finishGame,
}) => {
  const [streak, setStreak] = useState(1);
  const [pointsPerAnswer, setPointsPerAnswer] = useState(10);

  const showNextQuestion = () => {
    if (questionsArr.length > questionNum + 1) {
      setQuestionNum(questionNum + 1);
    } else {
      finishGame();
    }
  };

  const handleAnswer = (answer) => {
    const isCorrect = questionsArr[questionNum].word === mixedAnswersArr[questionNum].word;
    if ((isCorrect && answer === 'right') || (!isCorrect && answer === 'wrong')) {
      setAnswersState({
        ...answersState,
        right: [...answersState.right, questionsArr[questionNum].word],
      });
      if (streak >= 9) {
        setPointsPerAnswer(80);
      } else if (streak >= 6) {
        setPointsPerAnswer(40);
      } else if (streak >= 3) {
        setPointsPerAnswer(20);
      }
      setPoints(points + pointsPerAnswer);
      setStreak(streak + 1);
    } else if ((!isCorrect && answer === 'right') || (isCorrect && answer === 'wrong')) {
      setAnswersState({
        ...answersState,
        wrong: [...answersState.wrong, questionsArr[questionNum].word],
      });
      setStreak(1);
      setPointsPerAnswer(10);
    }

    showNextQuestion();
  };

  const handleKeydown = (e) => {
    if (e.key === 'ArrowRight') {
      handleAnswer('right');
    } else if (e.key === 'ArrowLeft') {
      handleAnswer('wrong');
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
      <Button onClick={() => handleAnswer('wrong')}>
        Неверно
      </Button>
      <Button onClick={() => handleAnswer('right')}>
        Верно
      </Button>
      <div>
        {`Очки: ${points}.`}
      </div>
      <div>
        {`За верный ответ: +${pointsPerAnswer}.`}
      </div>
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
  points: PropTypes.number.isRequired,
  setPoints: PropTypes.func.isRequired,
  finishGame: PropTypes.func.isRequired,
};

export default SprintActive;
