import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { HeaderButton } from '../../../../_common/HeaderButton';

const NavListLink = ({ path, label }) => (
  <HeaderButton
    label={label}
    component={Link}
    to={path}
  />
);

NavListLink.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default React.memo(NavListLink);
