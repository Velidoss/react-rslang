import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import SettingsMenu from './SettingsMenu/SettingsMenu';
import GroupsMenu from './GroupsMenu/GroupsMenu';
import useTextBookHeaderStyles from './useTextBookHeaderStyles';
import determinateHeaderTitle from './determinateHeaderTitle';

const TextBookHeader = ({ groupNumber, setGroupNumber }) => {
  const [textBookHeaderTitle, setTextBookHeaderTitle] = useState('Розділ 1');
  const classes = useTextBookHeaderStyles();

  const { pathname } = useLocation();

  useEffect(() => {
    setTextBookHeaderTitle(determinateHeaderTitle(pathname, groupNumber));
  }, [pathname]);

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
  groupNumber: PropTypes.number.isRequired,
};

export default TextBookHeader;
