import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 50px;

  @media (max-width: 550px) {
    margin-top: 24px;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 77px;
  color: #7921C8;
  margin-bottom: 3px;

  @media (max-width: 550px) {
    font-size: 48px;
    line-height: 56px;
  }
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;

  @media (max-width: 550px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const SubtitleColored = styled.span`
  color: #7921C8;
`;

export const SkillsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 80px;

  @media (max-width: 550px) {
    gap: 40px;
    margin-top: 24px;
  }
  @media (max-width: 500px) {
    gap: 20px;
  }
`;

export const Skills = styled.div`
  position: relative;
  z-index: 2;
`;

export const SkillsTitle = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #7921C8;
  margin-bottom: 14px;

  @media (max-width: 550px) {
    font-size: 22px;
  }
`;

export const SkillsList = styled.ul`
  list-style: circle;
  list-style-position: inside;
`;

export const SkillsItem = styled.li`
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 6px;
  }
  @media (max-width: 550px) {
    font-size: 18px;
  }
`;

export const RightImageWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 663px;
  height: 650px;
  z-index: -1;

  @media (max-width: 1080px) {
    width: 450px;
    height: 450px;
    bottom: -200px;
    right: 300px;
    top: auto;
  }

  @media (max-width: 900px) {
    right: 200px;
  }

  @media (max-width: 768px) {
    right: 0px;
  }

  @media (max-width: 550px) {
    bottom: -120px;
    width: 350px;
    height: 350px;
  }

  @media (max-width: 450px) {
    width: 300px;
    height: 300px;
    bottom: -70px;
  }

  @media (max-width: 400px) {
    right: -60px;
  }
`;

export const RightImage = styled(Image)`

`;
