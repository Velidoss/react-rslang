import * as React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
//
import { VolumeUp } from '@material-ui/icons';
//
import readFewAudios from './readFewAudios';

const WordPlayButton = React.memo(({ audio, audioMeaning, audioExample }) => (
  <IconButton
    onClick={
    () => readFewAudios(audio, audioMeaning, audioExample)
  }
  >
    <VolumeUp />
  </IconButton>
));

WordPlayButton.propTypes = {
  audio: PropTypes.string.isRequired,
  audioMeaning: PropTypes.string.isRequired,
  audioExample: PropTypes.string.isRequired,
};

export { WordPlayButton };
