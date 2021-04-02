import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Button, Divider, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const DialogControls = ({ okButtonLabel, onSubmit, onClose }) => {
  const classes = useStyles();

  return (
    <>
      <Divider />
      <Grid container spacing={1} className={classes.root}>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={onSubmit}
          >
            {okButtonLabel}
          </Button>
        </Grid>
        <Grid item>
          <Button color="secondary" onClick={onClose}>Отмена</Button>
        </Grid>
      </Grid>
    </>
  );
};

DialogControls.propTypes = {
  okButtonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(DialogControls);
