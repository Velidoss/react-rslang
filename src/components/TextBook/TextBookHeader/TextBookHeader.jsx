import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
//
import { SettingsMenu } from './SettingsMenu';
import { GroupsMenu } from './GroupsMenu';
//
import determinateHeaderTitle from './determinateHeaderTitle';
//
import styles from './TextBookHeader.style';

const TextBookHeader = ({ groupNumber, setGroupNumber }) => {
  const classes = styles();
  const [textBookHeaderTitle, setTextBookHeaderTitle] = useState('Раздел 1');
  const { pathname } = useLocation();

  useEffect(() => {
    setTextBookHeaderTitle(determinateHeaderTitle(pathname, groupNumber));
  }, [pathname]);

  return (
    <Box className={classes.root}>
      <GroupsMenu
        setGroupNumber={setGroupNumber}
        className={classes.settingsButton}
        setTextBookHeaderTitle={setTextBookHeaderTitle}
      />
      {
        pathname !== '/textbook/stats' && (
          <SettingsMenu className={classes.groupButton} />
        )
      }
      <Typography variant="h5">
        {textBookHeaderTitle}
      </Typography>
    </Box>
  );
};

TextBookHeader.propTypes = {
  setGroupNumber: PropTypes.func.isRequired,
  groupNumber: PropTypes.number.isRequired,
};

export { TextBookHeader };
