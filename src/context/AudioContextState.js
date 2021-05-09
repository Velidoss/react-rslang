import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AudioContext from './AudioContext';
import DataAccessConstants from '../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

const AudioContextState = ({ children }) => {
  const [audioUrl, changeAudioUrl] = useState('');
  const [audio, changeAudio] = useState(null);

  const stopAudioPlay = () => {
    changeAudioUrl('');
  };

  useEffect(() => {
    if (audioUrl.length > 0) {
      changeAudio(new Audio(`${ApiUrl}/${audioUrl}`));
    }
  }, [audioUrl]);

  const readFewAudios = (...audios) => {
    let audioIndex = 0;
    changeAudioUrl(`${audios[audioIndex]}`);
    if (audio) {
      audio.play();

      audio.onended = () => {
        audioIndex += 1;
        if (audioIndex < audios.length) {
          changeAudioUrl(`${audios[audioIndex]}`);
          if (audio) {
            audio.play();
          }
        } else {
          changeAudioUrl('');
        }
      };
    }
  };

  return (
    <AudioContext.Provider
      value={{
        audioUrl,
        changeAudioUrl,
        stopAudioPlay,
        readFewAudios,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

AudioContextState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AudioContextState;
