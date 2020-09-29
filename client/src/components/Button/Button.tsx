import React from 'react';
import * as S from './ButtonStyle';

interface Props {
  
}

const Button: React.FC<Props> = ({} : Props) => {

	return (
    <S.Container>
        <S.Button>수정하기</S.Button>
    </S.Container>
    );
};

export default Button;

