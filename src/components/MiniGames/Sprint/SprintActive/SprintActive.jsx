import React, { useState, useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../../contexts/AuthContext';
import { setWordGameStatistics } from '../../../../store/textBookReducer/userWordsActionCreators';

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

const pointsStep1 = 10;
const pointsStep2 = 20;
const pointsStep3 = 40;
const pointsStep4 = 80;

const showBatteryIcon = (pointsPerAnswer) => {
  if (pointsPerAnswer === pointsStep4) {
    return <span className="span-battery span--step4"><BatteryFullIcon /></span>;
  }
  if (pointsPerAnswer === pointsStep3) {
    return <span className="span-battery span--step3"><BatteryCharging80Icon /></span>;
  }
  if (pointsPerAnswer === pointsStep2) {
    return <span className="span-battery span--step2"><BatteryCharging50Icon /></span>;
  }
  return <span className="span-battery span--step1"><BatteryCharging20Icon /></span>;
};

const SprintActive = ({
  questionsArr, mixedAnswersArr, questionNum, setQuestionNum, answersState, setAnswersState,
  points, setPoints, finishGame,
}) => {
  const dispatch = useDispatch();
  const { auth: { token, userId }, isAuth } = useAuth();
  const [streak, setStreak] = useState(1);
  const [pointsPerAnswer, setPointsPerAnswer] = useState(pointsStep1);
  const [lastAnswerState, setLastAnswerState] = useState('none');

  let mainBgClassName = 'sprint-active__main';

  if (lastAnswerState === 'right') {
    mainBgClassName += ' sprint-active__main--right';
  } else if (lastAnswerState === 'wrong') {
    mainBgClassName += ' sprint-active__main--wrong';
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLastAnswerState('none');
    }, 300);
    return () => clearTimeout(timer);
  }, [lastAnswerState]);

  const classes = useStyles();

  const showNextQuestion = () => {
    if (questionsArr.length > questionNum + 1) {
      setQuestionNum(questionNum + 1);
    } else {
      finishGame();
    }
  };

  const handleAnswer = (answer) => {
    const isCorrect = questionsArr[questionNum].word === mixedAnswersArr[questionNum].word;
    const wordObj = {
      word: questionsArr[questionNum].word,
      translation: questionsArr[questionNum].translation,
      audio: questionsArr[questionNum].audio,
    };
    if ((isCorrect && answer === 'right') || (!isCorrect && answer === 'wrong')) {
      setAnswersState({
        ...answersState,
        right: [...answersState.right, wordObj],
      });
      if (streak >= 9) {
        setPointsPerAnswer(pointsStep4);
      } else if (streak >= 6) {
        setPointsPerAnswer(pointsStep3);
      } else if (streak >= 3) {
        setPointsPerAnswer(pointsStep2);
      }
      setPoints(points + pointsPerAnswer);
      setStreak(streak + 1);
      if (isAuth) {
        dispatch(setWordGameStatistics(userId, token, questionsArr[questionNum].id, 'sprint', 'right'));
      }
      setLastAnswerState('right');
    } else if ((!isCorrect && answer === 'right') || (isCorrect && answer === 'wrong')) {
      setAnswersState({
        ...answersState,
        wrong: [...answersState.wrong, wordObj],
      });
      setStreak(1);
      setPointsPerAnswer(pointsStep1);
      setLastAnswerState('wrong');
      if (isAuth) {
        dispatch(setWordGameStatistics(userId, token, questionsArr[questionNum].id, 'sprint', 'wrong'));
      }
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
          <div className={mainBgClassName}>
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
    id: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  mixedAnswersArr: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  questionNum: PropTypes.number.isRequired,
  setQuestionNum: PropTypes.func.isRequired,
  answersState: PropTypes.shape({
    right: PropTypes.arrayOf(PropTypes.shape({
      word: PropTypes.string.isRequired,
      translation: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    wrong: PropTypes.arrayOf(PropTypes.shape({
      word: PropTypes.string.isRequired,
      translation: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
  setAnswersState: PropTypes.func.isRequired,
  points: PropTypes.number.isRequired,
  setPoints: PropTypes.func.isRequired,
  finishGame: PropTypes.func.isRequired,
};

export default SprintActive;
