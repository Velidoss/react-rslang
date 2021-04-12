import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import SettingsMenu from './SettingsMenu/SettingsMenu';
import GroupsMenu from './GroupsMenu/GroupsMenu';
import useTextBookHeaderStyles from './useTextBookHeaderStyles';

const TextBookHeader = ({ setGroupNumber }) => {
  const [textBookHeaderTitle, setTextBookHeaderTitle] = useState('');
  const classes = useTextBookHeaderStyles();
  return (
    <Grid container className={classes.textBookHeaderContainer}>
      <GroupsMenu
        setGroupNumber={setGroupNumber}
        setTextBookHeaderTitle={setTextBookHeaderTitle}
      />
      <SettingsMenu />
      <Grid container item xs={10}>
        <Typography variant="h3" className={classes.groupName}>
          {textBookHeaderTitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

TextBookHeader.propTypes = {
  setGroupNumber: PropTypes.func.isRequired,
};

export default TextBookHeader;
