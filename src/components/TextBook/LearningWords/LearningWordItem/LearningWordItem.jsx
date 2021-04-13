import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, ListItem, Avatar, IconButton, Typography, Divider, Collapse,
} from '@material-ui/core';
import {
  KeyboardArrowDown, KeyboardArrowUp,
} from '@material-ui/icons';
import WordStats from '../../WordStats/WordStats';
import useTextBookStyles from '../../useTextBookStyles';
import DataAccessConstants from '../../../../constants/DataAccessConstants';
import WordPlayButton from './WordPlayButton/WordPlayButton';

const LearningWordItem = ({
  word, showTranslation,
}) => {
  const [openStats, toggleOpenStats] = useState(false);
  const { ApiUrl } = DataAccessConstants;

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

LearningWordItem.propTypes = {
  word: PropTypes.shape({
    _id: PropTypes.string.isRequired,
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
  showTranslation: PropTypes.bool.isRequired,
};

export default LearningWordItem;
