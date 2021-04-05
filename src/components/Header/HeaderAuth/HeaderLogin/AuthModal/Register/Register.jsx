import * as React from 'react';
import PropTypes from 'prop-types';
//
import DialogControls from '../../../../../_common/DialogControls';

const Register = ({ onClose }) => {
  const handleRegister = () => console.log('login');

  return (
    <div>
      <p>register</p>
      <DialogControls
        okButtonLabel="Регистрация"
        onSubmit={handleRegister}
        onClose={onClose}
      />
    </div>
  );
};

Register.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default React.memo(Register);
