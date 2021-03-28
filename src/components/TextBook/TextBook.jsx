import React, { useEffect } from 'react';
import {
  Grid, CircularProgress, List, ListItem, Avatar, IconButton, Typography,
} from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { useDispatch, useSelector } from 'react-redux';
import textBookSelector from '../../store/selectors/textBookSelector';
import { getTextBookWords } from '../../store/textBookReducer/TextBookActionCreators';
import DataAccessContants from '../../constants/DataAccessContants';
import useTextBookStyles from './useTextBookStyles';
import readFewAudios from './readFewAudios';

const TextBook = () => {
  const classes = useTextBookStyles();

  const dispatch = useDispatch();
  const { words } = useSelector(textBookSelector);

  const { ApiUrl } = DataAccessContants;

  useEffect(() => {
    dispatch(getTextBookWords());
  }, []);

  console.log(words);

  if (words.length === 0) {
    return (
      <CircularProgress />
    );
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <List>
          {
            words.map((word) => (
              <ListItem key={word.id}>
                <Grid container direction="row">
                  <Grid item xs={2}>
                    <Avatar className={classes.avatar} src={`${ApiUrl}/${word.image}`} />
                  </Grid>
                  <Grid item container direction="column" xs={10}>
                    <Grid item>
                      <IconButton
                        onClick={
                          () => readFewAudios(word.audio, word.audioMeaning, word.audioExample)
                        }
                      >
                        <VolumeUpIcon />
                      </IconButton>
                      <Typography variant="span">
                        {word.word}
                      </Typography>
                      <Typography variant="span">
                        {word.transcription}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>
                        Перевод
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="span">
                        {word.textExample}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="span">
                        {word.textExampleTranslate}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItem>
            ))
          }
        </List>
      </Grid>
    </Grid>
  );
};

export default TextBook;
