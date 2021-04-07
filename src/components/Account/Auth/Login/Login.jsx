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
import FormCard from '../../../_common/FormCard';
import Loader from '../../../_common/Loader';
//
import { loginAC } from '../../../../store/loginReducer/loginReducerActions';
import { loginSelector } from '../../../../store/selectors/loginSelector';
//
import { useAuthChange } from '../../../../contexts/AuthContext';
import {
  emailInputFieldRules,
  textInputFieldRules,
  getFormInputProps,
} from '../../../../constants/authConstants';

const Login = () => {
  const dispatch = useDispatch();
  const formRef = React.useRef();
  const {
    control,
    errors,
    handleSubmit,
  } = useForm();
  const {
    isLoading,
    isError,
    errorComponentProps,
  } = useSelector(loginSelector, shallowEqual);
  const { login } = useAuthChange();

  const onSubmit = () => {
    const data = new FormData(formRef.current);

    dispatch(loginAC(data))
      .then((res) => {
        if (res) {
          login(res);
        }
      });
  };

  return isLoading
    ? <Loader color="secondary" />
    : (
      <FormCard>
        <form
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" align="center">Логин</Typography>
              {
              isError
                ? (
                  <Typography variant="subtitle2" align="center" color="error">
                    {errorComponentProps.message}
                  </Typography>
                )
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
                    name="password"
                    rules={textInputFieldRules}
                    control={control}
                    defaultValue=""
                    render={(props) => (
                      <TextField
                        {...getFormInputProps(true)}
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
                Войти
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormCard>
    );
};

export default React.memo(Login);
