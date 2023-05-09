export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export const required = value => value ? undefined : 'Required';

export const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)

export const minLength = min => value => value.length >= min ? undefined : `min length is ${min}`;

export const onlyLetters = value => value.replace(/[^a-zA-Z]/g,'');

export const onlyNumber = value => value.replace(/\D/, '')

export const currentLength = length => value => value.length === length ? undefined : `Number must be ${length} numbers`