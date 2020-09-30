import React from 'react';
import * as S from './ButtonStyle';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }: ButtonProps) => {
  return (
    <S.Container>
      <S.Button>{label}</S.Button>
    </S.Container>
  );
};

export default Button;
