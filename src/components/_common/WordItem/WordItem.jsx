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
import { ControlButtons } from './ControlButtons';
import { WordTextBlock } from './WordTextBlock';
import { WordStats } from './WordStats';
import { WordPlayButton } from './WordPlayButton';
//
import checkIfWordInDifficult from '../../../store/textBookReducer/checkIfWordInDifficult';
//
import styles from './WordItem.style';

const WordItem = ({
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
  const [openStats, toggleOpenStats] = React.useState(false);
  const [isDifficult, toggleIsDifficult] = React.useState(false);

  const handleOpenStats = () => { toggleOpenStats(!openStats); };

  React.useEffect(() => {
    toggleIsDifficult(userId && checkIfWordInDifficult(word, userWords));
  }, [word, userWords]);

  return (
    <ListItem className={classes.root}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={3} sm={2} lg={1}>
          <WordImage imgSrc={word.image} isDifficult={isDifficult} />
        </Grid>
        <Grid item container xs={9} sm={10} lg={11}>
          <Grid item xs={12}>
            <Box className={classes.wordHeader}>
              <Box className={classes.wordMainWrapper}>
                <div className={classes.wordMain}>
                  <WordPlayButton
                    audio={word.audio}
                    audioMeaning={word.audioMeaning}
                    audioExample={word.audioExample}
                  />
                  <Typography variant="h5">
                    <span className={classes.wordName}>{word.word}</span>
                    <span className={classes.wordTranscription}>{word.transcription}</span>
                  </Typography>
                </div>
              </Box>
              <Box className={classes.wordControls}>
                <ControlButtons
                  word={word}
                  userId={userId}
                  isDifficult={isDifficult}
                  token={token}
                  isAuth={isAuth}
                  showControls={showControls}
                  restoreCallback={restoreCallback}
                />
                <OpenStatsButton isOpen={openStats} onClick={handleOpenStats} />
              </Box>
            </Box>
          </Grid>
          {
            showTranslation && (
              <Grid item xs={12}>
                <Typography variant="h5" className={classes.wordTranslation}>
                  {`${word.wordTranslate}`}
                </Typography>
              </Grid>
            )
          }
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
            <WordStats
              word={
                userWords.length > 0
                  ? userWords.find(
                    (userWord) => userWord.wordId === word.id || userWord.wordId === word._id,
                  )
                  : null
              }
            />
          </Collapse>
        </Grid>
      </Grid>
    </ListItem>
  );
};

WordItem.defaultProps = {
  userId: null,
  token: null,
  restoreCallback: null,
};

WordItem.propTypes = {
  word: PropTypes.shape({
    _id: PropTypes.string,
    id: PropTypes.string,
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
