import wordAudio from '../../../../../common/wordAudio';
import DataAccessContants from '../../../../../constants/DataAccessContants';

const { ApiUrl } = DataAccessContants;

const readFewAudios = (...audios) => {
  let audioIndex = 0;
  const audioToPlay = wordAudio(`${audios[audioIndex]}`);

  audioToPlay.play();

  audioToPlay.onended = () => {
    audioIndex += 1;
    if (audioIndex < audios.length) {
      audioToPlay.src = `${ApiUrl}/${audios[audioIndex]}`;
      audioToPlay.play();
    }
  };
};

export default readFewAudios;
