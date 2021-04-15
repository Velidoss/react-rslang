import * as React from 'react';
import {
  Box,
  Grid,
  Button,
  Typography,
} from '@material-ui/core';
import Image from 'material-ui-image';
//
import { ThemeSwitch } from './ThemeSwitch';
import { AvatarModal } from './AvatarModal';
//
import { useAuthChange, useAuth } from '../../../contexts/AuthContext';
//
import portraitPlaceholder from '../../../assets/portrait-placeholder.png';
import styles from './Profile.style';

const Profile = () => {
  const classes = styles();
  const {
    auth: {
      name,
      userId,
      token,
      avatar,
    },
  } = useAuth();
  const { logout } = useAuthChange();
  const [isModalOn, setModalOn] = React.useState(false);

  const handleModal = () => { setModalOn(!isModalOn); };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Box className={classes.imageOuterWrapper}>
            <Box className={classes.imageInnerWrapper}>
              <Image src={avatar || portraitPlaceholder} cover />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <Typography variant="h4">{name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <ThemeSwitch />
            </Grid>
            <Grid item xs={12}>
              <AvatarModal
                open={isModalOn}
                onClose={handleModal}
                userId={userId}
                token={token}
              />
              <Button onClick={handleModal} color="secondary" variant="outlined">
                Сменить аватар
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button onClick={logout} color="secondary" variant="contained">
                Выйти из профиля
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export { Profile };
