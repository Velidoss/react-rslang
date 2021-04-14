import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grid,
  ListItem,
  Typography,
  Divider,
  Collapse,
} from '@material-ui/core';
//
import { WordImage } from './WordImage';
import { OpenStatsButton } from './OpenStatsButton';
import { WordTextBlock } from './WordTextBlock';
import { WordStats } from './WordStats';
import { WordPlayButton } from './WordPlayButton';
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
  const [isLoading, toggleIsLoading] = React.useState(false);
  const [openStats, toggleOpenStats] = React.useState(false);
  const [isDifficult, toggleIsDifficult] = React.useState(false);

  const handleOpenStats = () => { toggleOpenStats(!openStats); };

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
            <Box className={classes.wordHeader}>
              <Box className={classes.wordMain}>
                <Box className={classes.wordPlayButton}>
                  <WordPlayButton
                    audio={word.audio}
                    audioMeaning={word.audioMeaning}
                    audioExample={word.audioExample}
                  />
                </Box>
                <Typography variant="h5" className={classes.wordName}>
                  {word.word}
                </Typography>
                <Typography variant="h5" className={classes.wordTranscription}>
                  {word.transcription}
                </Typography>
                {
                  showTranslation && (
                    <Typography variant="h5">{` - ${word.wordTranslate}`}</Typography>
                  )
                }
              </Box>
              <Box className={classes.wordControls}>
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
                <OpenStatsButton isOpen={openStats} onClick={handleOpenStats} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <WordTextBlock
              text={word.textMeaning}
              translation={word.textMeaningTranslate}
              isTranslationOn={showTranslation}
            />
          </Grid>
          <Grid item xs={12}>
            <WordTextBlock
              text={word.textExample}
              translation={word.textExampleTranslate}
              isTranslationOn={showTranslation}
            />
          </Grid>
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

  userWords: PropTypes.arrayOf({
    _id: PropTypes.number.isRequired,
  }).isRequired,

  showControls: PropTypes.bool.isRequired,
  showTranslation: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,

  userId: PropTypes.string,
  token: PropTypes.string,
  restoreCallback: PropTypes.func,
};

export { WordItem };
