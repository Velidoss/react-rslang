import DataAccessConstants from '../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

const wordAudio = (audioUrl) => new Audio(`${ApiUrl}/${audioUrl}`);

export default wordAudio;
