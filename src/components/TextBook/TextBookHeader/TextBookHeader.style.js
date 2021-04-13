import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },

  settingsButton: {
    marginRight: theme.spacing(1),
  },

  groupButton: {
    marginRight: theme.spacing(3),
  },
}));
