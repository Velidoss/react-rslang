import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, ListItem, Avatar, IconButton, Typography, Divider, Grow,
} from '@material-ui/core';
import {
  VolumeUp, Star, Delete, KeyboardArrowDown, KeyboardArrowUp,
} from '@material-ui/icons';
import WordStats from '../WordStats/WordStats';
import useTextBookStyles from '../useTextBookStyles';
import DataAccessContants from '../../../constants/DataAccessContants';
import readFewAudios from '../readFewAudios';

const WordItem = ({ word }) => {
  const [openStats, toggleOpenStats] = useState(false);
  const { ApiUrl } = DataAccessContants;

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
              <IconButton
                onClick={
                () => readFewAudios(word.audio, word.audioMeaning, word.audioExample)
              }
              >
                <VolumeUp />
              </IconButton>
              <Typography variant="h4" className={classes.wordName}>
                {word.word}
              </Typography>
              <Typography variant="h4" className={classes.wordTranscription}>
                {word.transcription}
              </Typography>
            </Grid>
            <Grid item className={classes.wordControlsItem}>
              <IconButton>
                <Star />
              </IconButton>
              <IconButton>
                <Delete />
              </IconButton>
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
            <Typography variant="h5">
              Перевод
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.wordExplanation} variant="subtitle2">
              <span dangerouslySetInnerHTML={{ __html: word.textExample }} />
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.wordTranslatedExplanation} variant="subtitle2">
              {word.textExampleTranslate}
            </Typography>
          </Grid>
          <Divider />
          <Grow in={openStats}>
            <WordStats />
          </Grow>
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
    transcription: PropTypes.string.isRequired,
    textExample: PropTypes.string.isRequired,
    textExampleTranslate: PropTypes.string.isRequired,
  }).isRequired,
};

export default WordItem;
