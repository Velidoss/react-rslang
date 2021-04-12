import * as React from 'react';
import { Button } from '@material-ui/core';
//
import { useAuthChange } from '../../../contexts/AuthContext';

const Profile = () => {
  const { logout } = useAuthChange();

  return (
    <div>
      <Button onClick={logout} color="secondary" variant="outlined">
        Выйти из профиля
      </Button>
    </div>
  );
};

export { Profile };
