import * as React from 'react';
import {
  useDispatch,
  useSelector,
  shallowEqual,
} from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';
//
import { useAuthChange } from '../../../../contexts/AuthContext';
//
import { loginAC } from '../../../../store/loginReducer/loginReducerActions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formWrapper: {
    padding: theme.spacing(2),
    maxWidth: '80%',
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { login } = useAuthChange();
  const {
    register,
    handleSubmit,
    errors,
  } = useForm();
  const {
    isLoading,
    isError,
    errorMessage,
  } = useSelector((state) => state.loginReducer, shallowEqual);

  const handleLogin = handleSubmit((data) => {
    dispatch(loginAC(data))
      .then((res) => { login(res); });
  });

  return (
    <Box className={classes.root}>
      <Paper className={classes.formWrapper}>
        <Typography variant="h6" gutterBottom align="center">Логин</Typography>
        <form
          onSubmit={handleLogin}
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    inputRef={register({
                      required: true,
                      // pattern: emailRegex,
                    })}
                    fullWidth
                    error={errors.email}
                    label="E-mail"
                    name="email"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    error={errors.password}
                    inputRef={register({ required: true })}
                    label="password"
                    name="password"
                    size="small"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
            {isError && <Grid item xs={12}><div>{errorMessage}</div></Grid>}
            <Grid item xs={12}>
              {
                isLoading
                  ? null
                  : <Button type="submit">Отправить</Button>
              }
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default React.memo(Login);
