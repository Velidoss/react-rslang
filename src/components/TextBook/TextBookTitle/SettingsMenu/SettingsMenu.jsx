import {
  Menu, MenuItem, Grid, IconButton, Checkbox, Typography,
} from '@material-ui/core';
import { SettingsApplications } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTextBookTitleStyles from '../useTextBookTitleStyles';
import textBookSelector from '../../../../store/selectors/textBookSelector';
import { changeTranslationStateAC, fetchControlsStateAC } from '../../../../store/textBookReducer/TextBookActionCreators';

const SettingsMenu = () => {
  const classes = useTextBookTitleStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const { showTranslation, showControls } = useSelector(textBookSelector);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container>
      <IconButton onClick={handleClick} disableRipple className={classes.button}>
        <SettingsApplications className={classes.buttonIcon} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => dispatch(changeTranslationStateAC(!showTranslation))}>
          <Checkbox
            checked={showTranslation}
            color="default"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <Typography>
            Перевод
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => dispatch(fetchControlsStateAC(!showControls))}>
          <Checkbox
            checked={showControls}
            color="default"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <Typography>
            Кнопки управления
          </Typography>
        </MenuItem>
      </Menu>
    </Grid>

  );
};

export default SettingsMenu;
