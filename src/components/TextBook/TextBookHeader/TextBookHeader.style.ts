import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
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
