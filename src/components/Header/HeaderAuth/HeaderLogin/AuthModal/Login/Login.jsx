import * as React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useForm } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';
//
import DialogControls from '../../../../../_common/DialogControls';
//
import { useAuthChange } from '../../../../../../contexts/AuthContext';

const Login = ({ onClose }) => {
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
    isReady,
  } = useSelector((state) => state.loginReducer, shallowEqual);

  const handleLogin = () => console.log('login');

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            inputRef={register({
              required: true,
              minLength: 6,
            })}
            error={errors.name}
            label="Имя"
            helperText="Helper text"
            name="name"
            size="small"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <DialogControls
        okButtonLabel="Логин"
        onSubmit={handleLogin}
        onClose={onClose}
      />
    </form>
  );
};

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default React.memo(Login);
