import React, { useEffect, useState } from 'react';
import {
  Container, Button, Grid, Typography, Divider, IconButton,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import wordAudio from '../../../../common/wordAudio';

const useStyles = makeStyles(() => ({
  audioChallengeActiveGridItem: {
    textAlign: 'center',
  },
  audioChallengeActiveQ: {
    margin: '1rem',
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
          <Typography variant="h5" className={classes.audioChallengeActiveQ}>
            {!isCurrQAnswered ? (
              <IconButton onClick={() => wordAudio(questionsArr[questionNum].audio).play()}>
                <VolumeUpIcon />
              </IconButton>
            ) : questionsArr[questionNum].word}
          </Typography>
          {mixedAnswersArr[questionNum].map((el, index) => (
            <Button
              key={`${el.translation} ${isCurrQAnswered}`}
              variant="contained"
              color="secondary"
              className={isCurrQAnswered ? getBtnClassName(index) : classes.audioChallengeActiveBtn}
              onClick={() => handleAnswer(index)}
            >
              {index + 1}
              {'. '}
              {el.translation}
            </Button>
          ))}
          <Divider className={classes.audioChallengeActiveHr} />
          <Typography className={classes.audioChallengeActiveP}>
            {`Серия верных ответов: ${streak}.`}
          </Typography>
          {isCurrQAnswered ? (
            <Button
              variant="contained"
              color="primary"
              className={classes.audioChallengeActiveBtn}
              onClick={showNextQuestion}
            >
              Далее
            </Button>
          ) : null}
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
