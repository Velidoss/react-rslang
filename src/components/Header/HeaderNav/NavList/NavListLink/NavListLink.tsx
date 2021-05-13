import * as React from 'react';
import { Link } from 'react-router-dom';
import { NavListLinkButton } from '../../../../_common';

interface NavListLinkProps {
  path: string;
  label: string;
}

const NavListLink: React.FC<NavListLinkProps> = ({ path, label }) => (
  <NavListLinkButton
    label={label}
    component={Link}
    to={path}
  />
);

export { NavListLink };
