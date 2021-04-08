import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, ListItem, Avatar, IconButton, Typography, Divider, Collapse,
} from '@material-ui/core';
import {
  Delete, KeyboardArrowDown, KeyboardArrowUp,
} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import WordStats from '../WordStats/WordStats';
import useTextBookStyles from '../useTextBookStyles';
import DataAccessContants from '../../../constants/DataAccessContants';
import WordPlayButton from './WordPlayButton/WordPlayButton';
import { addWordToDifficult, deleteWordFromDifficult } from '../../../store/userWordsReducer/userWordsActionCreators';
import WordInDifficultsButton from './WordInDifficultsButton/WordInDifficultsButton';
import checkIfWordInDifficult from '../../../store/userWordsReducer/checkIfWordInDifficult';

const WordItem = ({
  word, userWords, showControls, showTranslation, userId, token,
}) => {
  const dispatch = useDispatch();
  const [isDifficult, toggleIsDifficult] = useState(false);
  const [openStats, toggleOpenStats] = useState(false);
  const { ApiUrl } = DataAccessContants;

  useEffect(() => (
    checkIfWordInDifficult(word, userWords)
      ? toggleIsDifficult(true)
      : toggleIsDifficult(false)), [userWords]);

  const classes = useTextBookStyles();

  return (
    <ListItem className={classes.wordContainer}>
      <Grid container direction="row">
        <Grid item xs={2}>
          <Avatar className={classes.avatar} src={`${ApiUrl}/${word.image}`} />
        </Grid>
        <Grid item container direction="column" xs={10}>
          <Grid item container className={classes.wordControls}>
            <Grid item className={classes.wordControlsItem}>
              <WordPlayButton
                audio={word.audio}
                audioMeaning={word.audioMeaning}
                audioExample={word.audioExample}
              />
              <Typography variant="h4" className={classes.wordName}>
                {word.word}
              </Typography>
              <Typography variant="h4" className={classes.wordTranscription}>
                {word.transcription}
              </Typography>
            </Grid>
            <Grid item className={classes.wordControlsItem}>
              {
                showControls && userId && token
                  ? (
                    <Grid>
                      <WordInDifficultsButton
                        isDifficult={isDifficult}
                        addWordToDifficult={
                          () => dispatch(addWordToDifficult(word.id, userId, token))
                        }
                        removeWordFromDifficult={
                          () => dispatch(deleteWordFromDifficult(word.id, userId, token))
                        }
                      />
                      <IconButton>
                        <Delete />
                      </IconButton>
                    </Grid>
                  )
                  : <div />
              }

              <IconButton onClick={() => toggleOpenStats((prev) => !prev)}>
                {
                  openStats
                    ? <KeyboardArrowUp />
                    : <KeyboardArrowDown />
                }
              </IconButton>
            </Grid>
          </Grid>
          {
              showTranslation
                ? (
                  <Grid item>
                    <Typography variant="h5">
                      {
                      word.wordTranslate
                    }
                    </Typography>
                  </Grid>
                )
                : <div />
            }
          <Grid item>
            <Typography className={classes.wordExplanation} variant="subtitle2">
              <span dangerouslySetInnerHTML={{ __html: word.textExample }} />
            </Typography>
          </Grid>
          {
            showTranslation
              ? (
                <Grid item>
                  <Typography className={classes.wordTranslatedExplanation} variant="subtitle2">
                    {word.textExampleTranslate}
                  </Typography>
                </Grid>
              )
              : <div />
          }
          <Collapse in={openStats}>
            <Divider />
            <WordStats />
          </Collapse>
        </Grid>
      </Grid>
    </ListItem>
  );
};

WordItem.defaultProps = {
  userId: null,
  token: null,
};

WordItem.propTypes = {
  word: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired,
    audioMeaning: PropTypes.string.isRequired,
    audioExample: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    wordTranslate: PropTypes.string.isRequired,
    transcription: PropTypes.string.isRequired,
    textExample: PropTypes.string.isRequired,
    textExampleTranslate: PropTypes.string.isRequired,
  }).isRequired,
  showControls: PropTypes.bool.isRequired,
  showTranslation: PropTypes.bool.isRequired,
  userWords: PropTypes.arrayOf({}).isRequired,
  userId: PropTypes.string,
  token: PropTypes.string,
};

export default WordItem;
