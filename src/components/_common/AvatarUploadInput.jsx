import * as React from 'react';
import {
  Grid,
  Button,
  Typography,
  IconButton,
  makeStyles,
} from '@material-ui/core';
//
import { Cancel } from '@material-ui/icons';

const useStyles = makeStyles({
  input: {
    display: 'none',
  },
  image: {
    height: '5rem',
    width: '5rem',
    objectFit: 'cover',
  },
  imageName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '5rem',
  },
});

const ImageUploadInput = () => {
  const [currentFile, setCurrentFile] = React.useState(null);
  const [previewImage, setPreviewImage] = React.useState(null);
  const classes = useStyles();

  const selectFile = (event) => {
    const img = event.target.files[0];
    setCurrentFile(img);
    setPreviewImage(URL.createObjectURL(img));
  };

  const clearCurrentFile = () => {
    setCurrentFile(null);
    setPreviewImage(null);
  };

  return (
    <Grid container spacing={2} justify="flex-start" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="body1">Аватар:</Typography>
      </Grid>
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
        <Grid container spacing={3} justify="flex-start" alignItems="center">
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
          <Grid item>
            {previewImage && (
            <IconButton color="secondary" component="span" type="contained" onClick={clearCurrentFile}>
              <Cancel />
            </IconButton>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageUploadInput;
