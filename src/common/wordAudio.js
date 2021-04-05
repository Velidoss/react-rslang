import DataAccessContants from '../constants/DataAccessContants';

const { ApiUrl } = DataAccessContants;

const wordAudio = (audioUrl) => new Audio(`${ApiUrl}/${audioUrl}`);

export default wordAudio;
