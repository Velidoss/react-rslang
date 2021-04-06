import * as React from 'react';
import { Link } from 'react-router-dom';
//
// import { useAuth } from '../../../../contexts/AuthContext';

const HeaderProfile = () => (
  <Link to="/account">profile</Link>
);

export default React.memo(HeaderProfile);
