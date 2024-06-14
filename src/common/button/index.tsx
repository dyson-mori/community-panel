import React from "react";

import { Container } from "./styles";
import { Loading } from "..";

export type Button = {
  id?: string;
  type: 'upload' | 'select' | 'click' | 'submit' | 'button';
  selected?: boolean;
  loading?: boolean;
  isCreator?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<Button> = ({ type = 'button', isCreator, selected, loading, children, onClick, ...rest }) => {
  return (
    <Container type={type} isCreator={isCreator} disabled={loading} selected={selected} onClick={onClick} {...rest}>
      {loading ? <Loading visible /> : children}
    </Container>
  )
};
