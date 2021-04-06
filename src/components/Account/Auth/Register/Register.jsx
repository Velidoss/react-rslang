import * as React from 'react';
// import {
//   useDispatch,
//   useSelector,
//   shallowEqual,
// } from 'react-redux';
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
// import { useAuthChange } from '../../../../contexts/AuthContext';
//
// import { loginAC } from '../../../../store/loginReducer/loginReducerActions';
import {
  emailInputFieldRules,
  textInputFieldRules,
  getFormInputProps,
} from '../../../../constants/authConstants';

const Register = () => {
  const formRef = React.createRef();
  const {
    control, errors, handleSubmit,
  } = useForm();
  const onSubmit = () => {
    console.log('succes', control);
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
