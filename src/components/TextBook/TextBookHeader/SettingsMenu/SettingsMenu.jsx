import * as React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Menu,
  MenuItem,
  IconButton,
  Checkbox,
  Typography,
} from '@material-ui/core';
//
import { SettingsApplications } from '@material-ui/icons';
//
import textBookSelector from '../../../../store/selectors/textBookSelector';
import { changeTranslationStateAC, fetchControlsStateAC } from '../../../../store/textBookReducer/TextBookActionCreators';
import { useAuth } from '../../../../contexts/AuthContext';

const SettingsMenu = ({ className }) => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { showTranslation, showControls } = useSelector(textBookSelector);

  const handleClick = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };

  return (
    <>
      <IconButton
        disableRipple
        onClick={handleClick}
        className={className}
        aria-controls="textbook-options-menu"
        aria-haspopup="true"
      >
        <SettingsApplications />
      </IconButton>
      <Menu
        keepMounted
        id="textbook-options-menu"
        anchorEl={anchorEl}
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
        {
          isAuth && (
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
          )
        }

      </Menu>
    </>
  );
};

SettingsMenu.defaultProps = {
  className: null,
};

SettingsMenu.propTypes = {
  className: PropTypes.string,
};

export { SettingsMenu };
