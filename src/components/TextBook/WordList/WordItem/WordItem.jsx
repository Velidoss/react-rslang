import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  ListItem,
  IconButton,
  Typography,
  Divider,
  Collapse,
} from '@material-ui/core';
//
import {
  Star,
  Delete,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from '@material-ui/icons';
//
import { WordStats } from './WordStats';
import { WordPlayButton } from './WordPlayButton';
import { WordImage } from './WordImage';
//
import styles from './WordItem.style';

const WordItem = ({ word, showControls, showTranslation }) => {
  const classes = styles();
  const [openStats, toggleOpenStats] = useState(false);

  return (
    <ListItem className={classes.root}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={3} sm={2} lg={1}>
          <WordImage imgSrc={word.image} />
        </Grid>
        <Grid item container direction="column" xs={9} sm={10} lg={11}>
          <Grid item container className={classes.wordControls}>
            <Grid item className={classes.wordControlsItem}>
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
            </Grid>
            <Grid item className={classes.wordControlsItem}>
              {
                showControls && (
                  <Grid>
                    <IconButton>
                      <Star />
                    </IconButton>
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </Grid>
                )
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
            showTranslation && (
              <Grid item>
                <Typography variant="h5">{word.wordTranslate}</Typography>
              </Grid>
            )
          }
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
};

WordItem.propTypes = {
  word: PropTypes.shape({
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
};

export { WordItem };
