import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import SettingsMenu from './SettingsMenu/SettingsMenu';
import GroupsMenu from './GroupsMenu/GroupsMenu';
import useTextBookHeaderStyles from './useTextBookHeaderStyles';

const TextBookHeader = ({ groupNumber, setGroupNumber }) => {
  const classes = useTextBookHeaderStyles();
  return (
    <Grid container className={classes.textBookHeaderContainer}>
      <GroupsMenu setGroupNumber={setGroupNumber} />
      <SettingsMenu />
      <Grid container item xs={10}>
        <Typography variant="h3" className={classes.groupName}>
          {`Раздел ${groupNumber + 1}`}
        </Typography>
      </Grid>

    </Grid>
  );
};

TextBookHeader.propTypes = {
  setGroupNumber: PropTypes.func.isRequired,
  groupNumber: PropTypes.number.isRequired,
};

export default TextBookHeader;
