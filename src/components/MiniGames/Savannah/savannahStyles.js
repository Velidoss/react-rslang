import { makeStyles } from '@material-ui/core';

export default makeStyles({
  dataContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  questionWord: {
    margin: '0 10px 0 10px ',
  },
  word: {
    marginBottom: '20px',
  },
  progress: {
    width: '80%',
    margin: '0 auto',
  },
  wordsList: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    textAlign: 'center',
    marginTop: '10px',
  },
  resultButton: {
    margin: '5px auto',
  },
});
