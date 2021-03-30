import React from 'react';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
// import PropTypes from 'prop-types';
import useTextBookTitleStyles from './useTextBookTitleStyles';
import SettingsMenu from './SettingsMenu/SettingsMenu';

const TextBookTitle = () => {
  const classes = useTextBookTitleStyles();
  return (
    <Grid container>
      <IconButton disableRipple className={classes.button}>
        <Bookmark className={classes.buttonIcon} />
      </IconButton>
      <SettingsMenu />
      <Typography variant="h3">
        Раздел 1
      </Typography>
    </Grid>
  );
};

// TextBookTitle.propTypes = {
//   switchPage: PropTypes.func.isRequired,
//   switchGroup: PropTypes.func.isRequired,
// };

export default TextBookTitle;
