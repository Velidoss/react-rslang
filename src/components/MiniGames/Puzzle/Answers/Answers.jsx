import React from 'react';
import PropTypes from 'prop-types';
import { Typography, IconButton } from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import wordAudio from '../../../../common/wordAudio';
import styles from '../styles/styles';

const Answers = ({
  isGameActive, rightQuantity, wrongQuantity, answersState,
}) => {
  const classes = styles();

  return (
    <>
      {isGameActive
        ? (
          <>
            <Typography>
              {isGameActive}
              <span>Верных ответов: </span>
              <span>{rightQuantity}</span>
            </Typography>
            <Typography>
              <span>Неверных ответов: </span>
              <span>{wrongQuantity}</span>
            </Typography>
          </>
        ) : (
          <div className={classes.answers}>
            {answersState.wrong.length
              ? (
                <>
                  <Typography variant="h6">{`Ошибок: ${answersState.wrong.length}`}</Typography>
                  <ul>
                    {
                      answersState.wrong.map((word) => (
                        <li key={word.id}>
                          <Typography noWrap>
                            <IconButton onClick={() => wordAudio(word.audio).play()}>
                              <VolumeUpIcon />
                            </IconButton>
                            <b>{word.word}</b>
                            <span>{` - ${word.wordTranslate}`}</span>
                          </Typography>
                        </li>
                      ))
                    }
                  </ul>
                  <hr />
                </>
              ) : null
            }
            <Typography variant="h6">{`Знаю: ${answersState.right.length}`}</Typography>
            <ul>
              {
                answersState.right.map((word) => (
                  <li key={word.id}>
                    <Typography noWrap>
                      <IconButton onClick={() => wordAudio(word.audio).play()}>
                        <VolumeUpIcon />
                      </IconButton>
                      <b>{word.word}</b>
                      <span>{` - ${word.wordTranslate}`}</span>
                    </Typography>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </>
  );
};

Answers.propTypes = {
  isGameActive: PropTypes.bool.isRequired,
  rightQuantity: PropTypes.number.isRequired,
  wrongQuantity: PropTypes.number.isRequired,
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

export default Answers;
