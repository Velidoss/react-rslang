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
import AvatarUploadInput from '../../../_common/AvatarUploadInput';
import FormCard from '../../../_common/FormCard';
//
import { registerAC } from '../../../../store/registerReducer/registerReducerActions';
import { registerSelector } from '../../../../store/selectors/registerSelector';
//
// import { useAuthChange } from '../../../../contexts/AuthContext';
import {
  emailInputFieldRules,
  textInputFieldRules,
  getFormInputProps,
} from '../../../../constants/authConstants';

const Register = () => {
  const dispatch = useDispatch();
  const formRef = React.useRef();
  const {
    control, errors, handleSubmit,
  } = useForm();
  const {
    isError,
    errorComponentProps,
  } = useSelector(registerSelector, shallowEqual);
  // const login = { useAuthChange };

  const onSubmit = () => {
    const data = new FormData(formRef.current);
    dispatch(registerAC(data));
  };

  return (
    <FormCard>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">Регистрация</Typography>
            {
              isError
                ? <Typography variant="subtitle2" align="center" color="error">{errorComponentProps.message}</Typography>
                : null
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
                      {...getFormInputProps(true)}
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
                      {...getFormInputProps(true)}
                      label="Имя"
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
                      {...getFormInputProps(true)}
                      type="password"
                      label="Пароль"
                      placeholder="User123"
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
              Отправить
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormCard>
  );
};

export default React.memo(Register);
