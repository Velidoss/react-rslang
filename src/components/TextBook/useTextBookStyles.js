import { makeStyles } from '@material-ui/core/styles';

const useTextBookStyles = makeStyles(() => ({
  container: {
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    marginTop: 60,
    overflow: 'hidden',
  },
  wordContainer: {
    borderBottom: '1px solid black',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  wordName: {
    marginRight: 32,
  },
  wordTranscription: {
    fontStyle: 'italic',
    fontWeight: 300,
  },
  wordExplanation: {
    fontWeight: 300,
  },
  wordTranslatedExplanation: {
    fontWeight: 300,
  },
  paginationContainer: {
    margin: '40px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  wordControls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wordControlsItem: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export default useTextBookStyles;
