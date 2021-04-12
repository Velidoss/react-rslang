import React from 'react';
import { SettingsBackupRestore } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import useWordInDifficultsStyles from '../../../WordItem/WordInDifficultsButton/useWordInDifficultsStyles';

const DeletedWordDeleteButton = ({ deleteWordFromDifficult }) => {
  const classes = useWordInDifficultsStyles();
  return (
    <IconButton
      className={classes.active}
      onClick={deleteWordFromDifficult}
    >
      <SettingsBackupRestore />
    </IconButton>
  );
};

DeletedWordDeleteButton.propTypes = {
  deleteWordFromDifficult: PropTypes.func.isRequired,
};

export default DeletedWordDeleteButton;
