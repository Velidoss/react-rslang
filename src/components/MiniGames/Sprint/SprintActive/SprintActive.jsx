import React, { useState, useEffect, useRef } from 'react';
import {
  Container, Button, Grid, Typography, Divider,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';
import BatteryCharging80Icon from '@material-ui/icons/BatteryCharging80';
import BatteryCharging50Icon from '@material-ui/icons/BatteryCharging50';
import BatteryCharging20Icon from '@material-ui/icons/BatteryCharging20';
import './sprintActiveStyles.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  sprintActiveBtn: {
    margin: '1rem',
  },
  sprintActiveP: {
    textAlign: 'center',
  },
  sprintActiveHr: {
    marginBottom: '1rem',
    width: '80%',
  },
  sprintActivePIconSpan: {
    bottom: '3px',
    position: 'relative',
  },
}));

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

const showBatteryIcon = (pointsPerAnswer) => {
  if (pointsPerAnswer === 80) {
    return <span className="span-battery span--80p"><BatteryFullIcon /></span>;
  }
  if (pointsPerAnswer === 40) {
    return <span className="span-battery span--40p"><BatteryCharging80Icon /></span>;
  }
  if (pointsPerAnswer === 20) {
    return <span className="span-battery span--20p"><BatteryCharging50Icon /></span>;
  }
  return <span className="span-battery span--10p"><BatteryCharging20Icon /></span>;
};

const SprintActive = ({
  questionsArr, mixedAnswersArr, questionNum, setQuestionNum, answersState, setAnswersState,
  points, setPoints, finishGame,
}) => {
  const [streak, setStreak] = useState(1);
  const [pointsPerAnswer, setPointsPerAnswer] = useState(10);

  const classes = useStyles();

  const showNextQuestion = () => {
    if (questionsArr.length > questionNum + 1) {
      setQuestionNum(questionNum + 1);
    } else {
      finishGame();
    }
  };

  const sprintActiveMain = useRef();

  const changeMainBgOnAnswer = (ans) => {
    if (!sprintActiveMain.current) {
      return;
    }
    if (ans) {
      sprintActiveMain.current.classList.add('sprint-active__main--right');
      setTimeout(() => {
        if (sprintActiveMain.current) {
          sprintActiveMain.current.classList.remove('sprint-active__main--right');
        }
      }, 300);
    } else {
      sprintActiveMain.current.classList.add('sprint-active__main--wrong');
      setTimeout(() => {
        if (sprintActiveMain.current) {
          sprintActiveMain.current.classList.remove('sprint-active__main--wrong');
        }
      }, 300);
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
      changeMainBgOnAnswer(true);
    } else if ((!isCorrect && answer === 'right') || (isCorrect && answer === 'wrong')) {
      setAnswersState({
        ...answersState,
        wrong: [...answersState.wrong, questionsArr[questionNum].word],
      });
      setStreak(1);
      setPointsPerAnswer(10);
      changeMainBgOnAnswer(false);
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
          <div className="sprint-active__main" ref={sprintActiveMain}>
            <Typography variant="h5">
              {questionsArr[questionNum].word}
            </Typography>
            <Typography variant="h5">
              {mixedAnswersArr[questionNum].translation}
            </Typography>
            <div className="sprint-active__buttons">
              <Button
                onClick={() => handleAnswer('wrong')}
                startIcon={<ArrowBackIcon />}
                color="secondary"
                className={classes.sprintActiveBtn}
                variant="outlined"
              >
                Неверно
              </Button>
              <Button
                onClick={() => handleAnswer('right')}
                endIcon={<ArrowForwardIcon />}
                color="primary"
                className={classes.sprintActiveBtn}
                variant="outlined"
              >
                Верно
              </Button>
            </div>
            <Divider className={classes.sprintActiveHr} />
            <Typography className={classes.sprintActiveP}>
              {`Очки: ${points}.`}
            </Typography>
            <Typography className={classes.sprintActiveP}>
              <span className={classes.sprintActivePIconSpan}>
                {`За верный ответ: +${pointsPerAnswer}.`}
              </span>
              {showBatteryIcon(pointsPerAnswer)}
            </Typography>
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
