import * as S from './styled';
import { GlobalContext } from '@/globalContext';
import mainPng from '@/assets/images/main.png';
import React, { useContext } from 'react';

const Hero: React.FC = () => {
  const { dictionary } = useContext(GlobalContext);

  return (
    <S.Container className='container'>
      <S.Title>{dictionary.hi}</S.Title>
      <S.Subtitle>
        {dictionary['my-name']}
        {' '}
        <S.SubtitleColored>{dictionary.name}</S.SubtitleColored>
      </S.Subtitle>
      <S.Subtitle>
        {dictionary['i-am']}
        {' '}
        <S.SubtitleColored>{dictionary['full-stack']}</S.SubtitleColored>
      </S.Subtitle>
      <S.SkillsContainer>
        <S.Skills>
          <S.SkillsTitle>{dictionary.frontend}</S.SkillsTitle>
          <S.SkillsList>
            <S.SkillsItem>React</S.SkillsItem>
            <S.SkillsItem>Next.js</S.SkillsItem>
            <S.SkillsItem>Vue</S.SkillsItem>
            <S.SkillsItem>Redux</S.SkillsItem>
            <S.SkillsItem>Mobx</S.SkillsItem>
            <S.SkillsItem>Sass</S.SkillsItem>
            <S.SkillsItem>Less</S.SkillsItem>
            <S.SkillsItem>React-spring</S.SkillsItem>
            <S.SkillsItem>Gsap</S.SkillsItem>
            <S.SkillsItem>Playwright</S.SkillsItem>
            <S.SkillsItem>Jest</S.SkillsItem>
            <S.SkillsItem>Storybook</S.SkillsItem>
            <S.SkillsItem>AWS</S.SkillsItem>
            <S.SkillsItem>Firebase</S.SkillsItem>
            <S.SkillsItem>Heroku</S.SkillsItem>
          </S.SkillsList>
        </S.Skills>
        <S.Skills>
          <S.SkillsTitle>{dictionary.backend}</S.SkillsTitle>
          <S.SkillsList>
            <S.SkillsItem>Flask</S.SkillsItem>
            <S.SkillsItem>Django</S.SkillsItem>
            <S.SkillsItem>Node.js</S.SkillsItem>
            <S.SkillsItem>Express</S.SkillsItem>
            <S.SkillsItem>Spring stack</S.SkillsItem>
            <S.SkillsItem>SQL</S.SkillsItem>
            <S.SkillsItem>PHP</S.SkillsItem>
            <S.SkillsItem>Laravel</S.SkillsItem>
          </S.SkillsList>
        </S.Skills>
      </S.SkillsContainer>
      <S.RightImageWrapper>
        <S.RightImage
          src={mainPng}
          alt=''
          fill
          sizes='(max-width: 1024px) 400px,
          663px'
        />
      </S.RightImageWrapper>
    </S.Container>
  );
};

export default Hero;
