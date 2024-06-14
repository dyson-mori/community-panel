import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export const Input: React.FC<InputProps> = ({ name, placeholder, ...rest }) => (
  <Container>
    <input name={name} placeholder={placeholder} {...rest} />
  </Container>
);

type InputRegisterProps = InputHTMLAttributes<HTMLInputElement> & {
  typeInput?: 'clear';
  placeholder?: string;
  register?: boolean;
  disabledButton?: boolean;
  onText: (e: string) => void;
  onClick?: () => void;
}

export const InputRegister: React.FC<InputRegisterProps> = ({ typeInput, placeholder, register, disabledButton, onText, onClick, ...rest }) => (
  <Container>
    <input placeholder={placeholder} onChange={evt => onText(evt.target.value)} {...rest} />
    {register && (
      <button disabled={disabledButton} onClick={onClick}>
        add
      </button>
    )}
  </Container>
);

export const InputSearch: React.FC<InputRegisterProps> = ({ typeInput, placeholder, disabledButton, onText, onClick, ...rest }) => (
  <Container>
    <input placeholder={placeholder} onChange={evt => onText(evt.target.value)} {...rest} />
    {typeInput === 'clear' && (
      <button type='button' disabled={disabledButton} onClick={onClick}>
        clear
      </button>
    )}
  </Container>
);