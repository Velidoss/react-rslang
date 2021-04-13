import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: '1',
  },
  tabs: {
    minWidth: '140px',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  panel: {
    width: '100%',
    height: '100%',
  },
}));
