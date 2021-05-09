import wordAudio from '../../../../common/wordAudio';
import DataAccessConstants from '../../../../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

const readFewAudios = (...audios: string[]): void => {
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
