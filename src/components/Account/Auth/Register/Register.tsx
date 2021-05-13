import * as React from 'react';
import {
  shallowEqual,
  useDispatch,
  useSelector,
} from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import {
  Grid,
  Button,
  TextField,
  Divider,
  Typography,
} from '@material-ui/core';
//
import { AvatarUploadInput, FormCard, Loader } from '../../../_common';
//
import { registerAC } from '../../../../store/registerReducer/registerReducerActions';
import { registerSelector } from '../../../../store/selectors/registerSelector';
//
import {
  emailInputFieldRules,
  textInputFieldRules,
} from '../../../../constants/authConstants';
import { AppDispatch } from '../../../../store/store';

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const {
    control, errors, handleSubmit,
  } = useForm();
  const {
    isReady,
    isLoading,
    isError,
    errorComponentProps,
  } = useSelector(registerSelector, shallowEqual);

  const onSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    const data = new FormData(formRef.current ?? undefined);

    dispatch(registerAC(data));
  };

  return (
    <FormCard>
      { isLoading && <Loader />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">Регистрация</Typography>
            {
              isError && (
              <Typography variant="subtitle2" align="center" color="error">
                {errorComponentProps.message}
              </Typography>
              )
            }
            {
              isReady && (
              <Typography variant="subtitle2" align="center">
                Теперь вы можете войти в профиль на вкладке Логин
              </Typography>
              )
            }
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  rules={emailInputFieldRules}
                  control={control}
                  defaultValue=""
                  render={(props) => (
                    <TextField
                      required
                      fullWidth={true}
                      size="small"
                      variant="outlined"
                      label="E-mail"
                      placeholder="example@mail.com"
                      error={!!(errors.email)}
                      helperText={errors.email?.message}
                      {...props}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="name"
                  rules={textInputFieldRules}
                  control={control}
                  defaultValue=""
                  render={(props) => (
                    <TextField
                      required
                      fullWidth={true}
                      size="small"
                      variant="outlined"
                      label="Никнейм"
                      placeholder="User123"
                      error={!!(errors.name)}
                      helperText={errors.name?.message}
                      {...props}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  rules={textInputFieldRules}
                  control={control}
                  defaultValue=""
                  render={(props) => (
                    <TextField
                      required
                      fullWidth={true}
                      size="small"
                      variant="outlined"
                      type="password"
                      label="Пароль"
                      placeholder="Password123"
                      error={!!(errors.password)}
                      helperText={errors.password?.message}
                      {...props}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <AvatarUploadInput />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              variant="contained"
              type="submit"
            >
              Зарегистрироваться
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormCard>
  );
};

export { Register };
