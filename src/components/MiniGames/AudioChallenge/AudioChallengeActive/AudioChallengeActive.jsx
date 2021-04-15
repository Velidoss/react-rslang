import React, { useEffect, useState } from 'react';
import {
  Container, Button, Grid, Typography, Divider, IconButton, Box,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import wordAudio from '../../../../common/wordAudio';
import DataAccessConstants from '../../../../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

const useStyles = makeStyles(() => ({
  audioChallengeActiveGridItem: {
    textAlign: 'center',
  },
  audioChallengeActiveQDiv: {
    minHeight: '170px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  audioChallengeActiveInfoDiv: {
    minHeight: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  audioChallengeActiveQ: {
    margin: '1rem',
  },
  audioChallengeActiveIcon: {
    fontSize: '2.5rem',
  },
  audioChallengeActiveImg: {
    borderRadius: '100%',
    width: '90px',
    height: '90px',
    objectFit: 'cover',
  },
  audioChallengeActiveBtn: {
    margin: '1rem',
  },
  audioChallengeActiveDisabledBtn: {
    margin: '1rem',
    backgroundColor: 'darkgray',
    pointerEvents: 'none',
  },
  audioChallengeActiveCorrectBtn: {
    margin: '1rem',
    backgroundColor: 'darkgreen',
    pointerEvents: 'none',
  },
  audioChallengeActiveWrongBtn: {
    margin: '1rem',
    backgroundColor: 'darkred',
    pointerEvents: 'none',
  },
  audioChallengeActiveHr: {
    margin: '0 auto 1rem',
    width: '80%',
  },
  audioChallengeActiveP: {
    textAlign: 'center',
  },
}));

const SprintActive = ({
  questionsArr, mixedAnswersArr, questionNum, setQuestionNum, answersState, setAnswersState,
  finishGame,
}) => {
  const [streak, setStreak] = useState(0);
  const [isCurrQAnswered, setIsCurrQAnswered] = useState(false);
  const [currAnswerNum, setCurrAnswerNum] = useState(-1);

  const classes = useStyles();

  useEffect(() => {
    wordAudio(questionsArr[questionNum].audio).play();
  }, [questionNum]);

  const showNextQuestion = () => {
    if (questionsArr.length > questionNum + 1) {
      setQuestionNum(questionNum + 1);
      setIsCurrQAnswered(false);
      setCurrAnswerNum(-1);
    } else {
      finishGame();
    }
  };

  const handleAnswer = (answerI) => {
    if (isCurrQAnswered) {
      return;
    }

    const isCorrect = questionsArr[questionNum].word === mixedAnswersArr[questionNum][answerI].word;
    if (isCorrect) {
      setAnswersState({
        ...answersState,
        right: [...answersState.right, questionsArr[questionNum].word],
      });
      setStreak(streak + 1);
    } else if (!isCorrect) {
      setAnswersState({
        ...answersState,
        wrong: [...answersState.wrong, questionsArr[questionNum].word],
      });
      setStreak(0);
    }
    setIsCurrQAnswered(true);
    setCurrAnswerNum(answerI);
  };

  const giveUp = () => {
    setAnswersState({
      ...answersState,
      wrong: [...answersState.wrong, questionsArr[questionNum].word],
    });
    setStreak(0);
    setIsCurrQAnswered(true);
    setCurrAnswerNum(-1);
  };

  const handleKeypress = (e) => {
    if ([1, 2, 3, 4, 5].includes(Number(e.key))) {
      handleAnswer(Number(e.key) - 1);
    } else if (e.key === 'Enter' && isCurrQAnswered) {
      showNextQuestion();
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeypress);
    return () => {
      window.removeEventListener('keypress', handleKeypress);
    };
  }, [isCurrQAnswered]);

  const getBtnClassName = (index) => {
    const isCorrect = questionsArr[questionNum].word === mixedAnswersArr[questionNum][index].word;
    if (isCorrect && currAnswerNum === index) {
      return classes.audioChallengeActiveCorrectBtn;
    }
    if (!isCorrect && currAnswerNum === index) {
      return classes.audioChallengeActiveWrongBtn;
    }
    return classes.audioChallengeActiveDisabledBtn;
  };

  return (
    <Container>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={12} className={classes.audioChallengeActiveGridItem}>
          {!isCurrQAnswered ? (
            <Box className={classes.audioChallengeActiveQDiv}>
              <Typography variant="h5" className={classes.audioChallengeActiveQ}>
                <IconButton onClick={() => wordAudio(questionsArr[questionNum].audio).play()}>
                  <VolumeUpIcon className={classes.audioChallengeActiveIcon} />
                </IconButton>
              </Typography>
            </Box>
          ) : (
            <Box className={classes.audioChallengeActiveQDiv}>
              <img
                src={`${ApiUrl}/${questionsArr[questionNum].image}`}
                alt={questionsArr[questionNum].word}
                className={classes.audioChallengeActiveImg}
              />
              <Typography variant="h5" className={classes.audioChallengeActiveQ}>
                <IconButton onClick={() => wordAudio(questionsArr[questionNum].audio).play()}>
                  <VolumeUpIcon />
                </IconButton>
                {questionsArr[questionNum].word}
                {' - '}
                {questionsArr[questionNum].translation}
              </Typography>
            </Box>
          )}
          {mixedAnswersArr[questionNum].map((el, index) => (
            <Button
              key={`${el.translation} ${isCurrQAnswered}`}
              variant="contained"
              color="secondary"
              className={isCurrQAnswered ? getBtnClassName(index) : classes.audioChallengeActiveBtn}
              onClick={() => handleAnswer(index)}
              disabled={isCurrQAnswered && currAnswerNum !== index}
            >
              {index + 1}
              {'. '}
              {el.translation}
            </Button>
          ))}
          <Divider className={classes.audioChallengeActiveHr} />
          <Box className={classes.audioChallengeActiveInfoDiv}>
            <Typography className={classes.audioChallengeActiveP}>
              {`Серия верных ответов: ${streak}.`}
            </Typography>
            {isCurrQAnswered ? (
              <Button
                variant="contained"
                color="secondary"
                className={classes.audioChallengeActiveBtn}
                onClick={showNextQuestion}
              >
                Далее
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="primary"
                className={classes.audioChallengeActiveBtn}
                onClick={giveUp}
              >
                Не знаю
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

SprintActive.propTypes = {
  questionsArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  mixedAnswersArr: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired).isRequired).isRequired,
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
