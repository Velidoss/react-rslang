import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
} from '@material-ui/core';
//
import { Loader } from '../../../_common';
//
import { avatarUpdateAC } from '../../../../store/avatarReducer/avatarReducerActions';
import { avatarSelector } from '../../../../store/selectors/avatarSelector';
//
import { useAuthChange } from '../../../../contexts/AuthContext';
//
import styles from './AvatarModal.style';

const AvatarModal = ({
  open, onClose, userId, token,
}) => {
  const dispatch = useDispatch();
  const classes = styles();
  const formRef = React.useRef();
  const { updateAvatar } = useAuthChange();
  const [currentFile, setCurrentFile] = React.useState(null);
  const [previewImage, setPreviewImage] = React.useState(null);
  const { isLoading } = useSelector(avatarSelector);

  const selectFile = (event) => {
    const img = event.target.files[0];
    setCurrentFile(img);
    setPreviewImage(URL.createObjectURL(img));
  };

  const clearCurrentFile = () => {
    setCurrentFile(null);
    setPreviewImage(null);
  };

  const handleClose = () => {
    clearCurrentFile();
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(formRef.current);

    dispatch(avatarUpdateAC(userId, token, data)).then((res) => {
      if (res) {
        updateAvatar(res);
      }

      handleClose();
    });
  };

  return (
    <Dialog
      open={open}
      scroll="body"
      aria-labelledby="modal-dialog-title"
    >
      { isLoading && <Loader />}
      <DialogTitle id="modal-dialog-title">
        Добавить новый аватар
      </DialogTitle>
      <DialogContent>
        <form ref={formRef} onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2} direction="row" alignItems="center">
                <Grid item>
                  <label htmlFor="button-file">
                    <input
                      id="button-file"
                      type="file"
                      name="avatar"
                      accept="image/*"
                      onClick={clearCurrentFile}
                      onChange={selectFile}
                      className={classes.input}
                    />
                    <Button variant="contained" color="primary" component="span">
                      {previewImage ? 'Сменить' : 'Загрузить'}
                    </Button>
                  </label>
                </Grid>
                <Grid item>
                  {previewImage && (
                    <img
                      src={previewImage}
                      alt="preview"
                      className={classes.image}
                    />
                  )}
                  {currentFile && (
                    <Typography
                      className={classes.imageName}
                      variant="body2"
                    >
                      {currentFile.name}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    disabled={!currentFile}
                  >
                    Отправить
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}
                    className={classes.button}
                  >
                    Закрыть
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

AvatarModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export { AvatarModal };
