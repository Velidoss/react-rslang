import React, { useState, useEffect } from 'react';
import { Container, Button, Grid } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './sprintActiveStyles.css';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Время вышло!</div>;
  }

  return (
    <div className="timer">
      <div className="text">{`${remainingTime > 3 ? 'Осталось' : 'Скорее!'}`}</div>
      <div className="value">{remainingTime}</div>
      <div className="text">секунд</div>
    </div>
  );
};

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
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={12} sm={8}>
          <div className="sprint-active__main">
            <div>
              {questionsArr[questionNum].word}
            </div>
            <div>
              {mixedAnswersArr[questionNum].translation}
            </div>
            <div className="sprint-active__buttons">
              <Button onClick={() => handleAnswer('wrong')}>
                Неверно
              </Button>
              <Button onClick={() => handleAnswer('right')}>
                Верно
              </Button>
            </div>
            <div>
              {`Очки: ${points}.`}
            </div>
            <div>
              {`За верный ответ: +${pointsPerAnswer}.`}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="timer__wrapper">
            <CountdownCircleTimer
              isPlaying
              duration={60}
              size={120}
              colors={[['#004777', 0.45], ['#019671', 0.45], ['#A30000']]}
              onComplete={finishGame}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
        </Grid>
      </Grid>
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
