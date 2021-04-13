import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
//
import { SettingsMenu } from './SettingsMenu';
import { GroupsMenu } from './GroupsMenu';
//
import styles from './TextBookHeader.style';

const TextBookHeader = ({ groupNumber, setGroupNumber }) => {
  const classes = styles();

  return (
    <Box container className={classes.root}>
      <GroupsMenu setGroupNumber={setGroupNumber} className={classes.settingsButton} />
      <SettingsMenu className={classes.groupButton} />
      <Typography variant="h5">
        {`Раздел ${groupNumber + 1}`}
      </Typography>
    </Box>
  );
};

TextBookHeader.propTypes = {
  setGroupNumber: PropTypes.func.isRequired,
  groupNumber: PropTypes.number.isRequired,
};

export { TextBookHeader };
