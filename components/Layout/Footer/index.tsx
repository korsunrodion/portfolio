import * as S from './styled';
import { GlobalContext } from '@/globalContext';
import React, { useContext } from 'react';

const Footer: React.FC = () => {
  const { dictionary } = useContext(GlobalContext);

  return (
    <S.Container>
      <S.Wrapper className='container'>
        <S.Title>{dictionary.footer}</S.Title>
        <S.Links>
          <S.Link href='https://t.me/korsunrodion' target='_blank'>@korsunrodion</S.Link>
          <S.Link href='mailto:korsun.rodion@gmail.com' target='_blank'>korsun.rodion@gmail.com</S.Link>
        </S.Links>
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
