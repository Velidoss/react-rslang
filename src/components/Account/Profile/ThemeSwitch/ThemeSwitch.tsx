import * as React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
//
import { useCustomTheme } from '../../../../contexts/CustomThemeContext';

const ThemeSwitch: React.FC = () => {
  const { changeTheme, isDark } = useCustomTheme();

  const handleChange = (): void => {
    changeTheme(isDark ? 'light' : 'dark');
  };

  return (
    <FormControlLabel
      control={(
        <Switch
          checked={isDark}
          onChange={handleChange}
          name="theme-switch"
          color="secondary"
        />
      )}
      label="Ночной режим"
    />
  );
};

export { ThemeSwitch };
