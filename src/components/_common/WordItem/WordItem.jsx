import * as React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Box,
  Grid,
  ListItem,
  IconButton,
  Typography,
  Divider,
  Collapse,
} from '@material-ui/core';
//
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@material-ui/icons';
//
import { WordStats } from './WordStats';
import { WordPlayButton } from './WordPlayButton';
import { WordImage } from './WordImage';
import WordInDifficultsButton from './ControlButtons/WordInDifficultsButton/WordInDifficultsButton';
import WordDeleteButton from './ControlButtons/WordDeleteButton/WordDeleteButton';
//
import { addWordToDifficult, deleteWordFromDifficult, addWordToDeleted } from '../../../store/textBookReducer/userWordsActionCreators';
import checkIfWordInDifficult from '../../../store/textBookReducer/checkIfWordInDifficult';
//
import styles from './WordItem.style';

const WordItem = React.memo(({
  word,
  userWords,
  showControls,
  showTranslation,
  userId,
  token,
  isAuth,
  restoreCallback,
}) => {
  const classes = styles();
  const dispatch = useDispatch();
  const [isLoading, toggleIsLoading] = React.useState(false);
  const [openStats, toggleOpenStats] = React.useState(false);
  const [isDifficult, toggleIsDifficult] = React.useState(false);

  React.useEffect(() => (
    userId && checkIfWordInDifficult(word, userWords)
      ? toggleIsDifficult(true)
      : toggleIsDifficult(false)), [userWords]);

  return (
    <ListItem className={classes.root}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={3} sm={2} lg={1}>
          <WordImage imgSrc={word.image} />
        </Grid>
        <Grid item container direction="column" xs={9} sm={10} lg={11}>
          <Grid item xs={12}>
            <Box className={classes.wordControlsItem}>
              <WordPlayButton
                audio={word.audio}
                audioMeaning={word.audioMeaning}
                audioExample={word.audioExample}
              />
              <Typography variant="h5" className={classes.wordName}>
                {word.word}
              </Typography>
              <Typography variant="h5" className={classes.wordTranscription}>
                {word.transcription}
              </Typography>
              {
                showTranslation && (<Typography variant="h5">{word.wordTranslate}</Typography>)
              }
              {
                (showControls && isAuth) && (
                <Grid>
                  <WordInDifficultsButton
                    isDifficult={isDifficult}
                    isLoading={isLoading}
                    addWordToDifficult={
                          () => {
                            toggleIsLoading(true);
                            dispatch(addWordToDifficult(word.id, userId, token));
                            toggleIsLoading(false);
                          }
                        }
                    removeWordFromDifficult={
                          () => {
                            toggleIsLoading(true);
                            dispatch(deleteWordFromDifficult(word.id, userId, token));
                            toggleIsLoading(false);
                          }
                        }
                  />
                  <WordDeleteButton
                    deleteWord={() => dispatch(addWordToDeleted(word.id, userId, token))}
                  />
                </Grid>
                )
              }
            </Box>
            <Grid item className={classes.wordControlsItem}>
              <IconButton onClick={() => toggleOpenStats((prev) => !prev)}>
                {
                  openStats
                    ? <KeyboardArrowUp />
                    : <KeyboardArrowDown />
                }
              </IconButton>
            </Grid>
          </Grid>

          <Grid item>
            <Typography className={classes.wordExplanation} variant="subtitle2">
              <span dangerouslySetInnerHTML={{ __html: word.textMeaning }} />
            </Typography>
          </Grid>
          {
            showTranslation && (
              <Grid item>
                <Typography
                  className={classes.wordTranslatedExplanation}
                  variant="subtitle2"
                >
                  {word.textMeaningTranslate}
                </Typography>
              </Grid>
            )
          }
          <Grid item>
            <Typography className={classes.wordExplanation} variant="subtitle2">
              <span dangerouslySetInnerHTML={{ __html: word.textExample }} />
            </Typography>
          </Grid>
          {
            showTranslation && (
              <Grid item>
                <Typography
                  className={classes.wordTranslatedExplanation}
                  variant="subtitle2"
                >
                  {word.textExampleTranslate}
                </Typography>
              </Grid>
            )
          }
          <Collapse in={openStats}>
            <Divider />
            <WordStats />
          </Collapse>
        </Grid>
      </Grid>
    </ListItem>
  );
});

WordItem.defaultProps = {
  userId: null,
  token: null,
  restoreCallback: null,
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
    textMeaning: PropTypes.string.isRequired,
    textMeaningTranslate: PropTypes.string.isRequired,
  }).isRequired,
  showControls: PropTypes.bool.isRequired,
  showTranslation: PropTypes.bool.isRequired,
  userWords: PropTypes.arrayOf({
    _id: PropTypes.number.isRequired,
  }).isRequired,
  isAuth: PropTypes.bool.isRequired,
  userId: PropTypes.string,
  token: PropTypes.string,
  restoreCallback: PropTypes.func,
};

export { WordItem };