import * as S from './styled';
import { GlobalContext } from '@/globalContext';
import mainPng from '@/assets/images/main.webp';
import React, { useContext } from 'react';

const Hero: React.FC = () => {
  const { dictionary } = useContext(GlobalContext);

  return (
    <S.Container className='container'>
      <S.Title>{dictionary.title}</S.Title>
      <S.Subtitle>{dictionary.subtitle}</S.Subtitle>
    </S.Container>
  );
};

export default Hero;
