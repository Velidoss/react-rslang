import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Typography, Divider, IconButton, Box,
} from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { makeStyles } from '@material-ui/core/styles';
import wordAudio from '../../../../common/wordAudio';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  resultBox: {
    marginTop: '1rem',
    textAlign: 'center',
  },
  persentage: {
    textAlign: 'center',
  },
  divider: {
    width: '40vw',
    margin: '1rem',
  },
  right: {
    borderBottom: '2px dashed #e03e87',
  },
  wrong: {
    borderBottom: '2px dashed #2f2f2f',
  },
}));

const Result = ({ answersState }) => {
  const calcRes = (r = 0, w = 0) => ((r / (r + w)) * 100) || 0;
  const percentage = calcRes(answersState.right.length, answersState.wrong.length).toFixed(0);

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box className={classes.resultBox}>
        <Typography variant="h6" className={classes.right}>
          Верные ответы (
          {answersState.right.length}
          )
        </Typography>
        {
          answersState.right.map((answer) => (
            <Typography key={answer.word}>
              <IconButton onClick={() => wordAudio(answer.audio).play()}>
                <VolumeUpIcon />
              </IconButton>
              {answer.word}
              {' - '}
              {answer.wordTranslate}
            </Typography>
          ))
        }
      </Box>
      <Box className={classes.resultBox}>
        <Typography variant="h6" className={classes.wrong}>
          Неверные ответы (
          {answersState.wrong.length}
          )
        </Typography>
        {
          answersState.wrong.map((answer) => (
            <Typography key={answer.word}>
              <IconButton onClick={() => wordAudio(answer.audio).play()}>
                <VolumeUpIcon />
              </IconButton>
              {answer.word}
              {' - '}
              {answer.wordTranslate}
            </Typography>
          ))
        }
      </Box>
      <Divider className={classes.divider} />
      <Typography className={classes.persentage}>
        <span>Итого: </span>
        <span>{`${percentage} / 100%`}</span>
      </Typography>
    </Container>
  );
};

Result.propTypes = {
  answersState: PropTypes.shape({
    right: PropTypes.arrayOf(PropTypes.shape({
      word: PropTypes.string.isRequired,
      wordTranslate: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    wrong: PropTypes.arrayOf(PropTypes.shape({
      word: PropTypes.string.isRequired,
      wordTranslate: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
};

export default Result;
