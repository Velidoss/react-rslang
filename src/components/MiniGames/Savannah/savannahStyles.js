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
  savnnahResultBox: {
    marginTop: '1rem',
    textAlign: 'center',
  },
  savnnahResultBtn: {
    margin: '1rem',
  },
  savnnahResultP: {
    textAlign: 'center',
  },
  savnnahResultHr: {
    width: '40vw',
    margin: '1rem',
  },
  savnnahResultPRight: {
    borderBottom: '2px dashed #e03e87',
  },
  savnnahResultPWrong: {
    borderBottom: '2px dashed #2f2f2f',
  },
});
