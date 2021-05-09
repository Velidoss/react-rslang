/* eslint-disable react/display-name */
import * as React from 'react';
import { IconButton } from '@material-ui/core';
//
import { VolumeUp } from '@material-ui/icons';
//
import readFewAudios from './readFewAudios';

interface WordPlayButtonProps {
  audio: string;
  audioMeaning: string;
  audioExample: string;
}

const WordPlayButton: React.FC<WordPlayButtonProps> = React.memo(({ audio, audioMeaning, audioExample }) => (
  <IconButton onClick={() => readFewAudios(audio, audioMeaning, audioExample)}>
    <VolumeUp />
  </IconButton>
));

export { WordPlayButton };
