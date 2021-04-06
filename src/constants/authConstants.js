export const expirationTimeoutDelta = 3_600_000;
export const emailInputFieldRules = {
  required: 'Обязательное поле',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'Email не валиден',
  },
};
export const textInputFieldRules = {
  required: 'Обязательное поле',
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*\d)[a-z0-9]{6,}/i,
    message: 'Должен содержать латинские символы и цифры, не менее 6 симоволов',
  },
};
export const getFormInputProps = (required = false) => ({
  required,
  fullWidth: true,
  size: 'small',
  variant: 'outlined',
});
