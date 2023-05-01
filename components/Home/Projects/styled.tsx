import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 120px;

  @media (max-width: 768px) {
    margin-top: 70px;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: #7921C8;
  margin-bottom: 18px;

  @media (max-width: 550px) {
    font-size: 36px;
    margin-bottom: 12px;
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectSide = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  background-color: #00000050;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 2;
  transition: opacity 0.1s;
  cursor: pointer;

  ${(props) => (props.active && `
    opacity: 1;
    pointer-events: all;
  `)}
`;

export const ProjectItem = styled.div`
  position: relative;
  height: 300px;
  border: 1px solid #7921C8;

  @media (hover: hover) {
    &:hover {
      ${ProjectSide} {
        opacity: 1;
        pointer-events: all;
      }
    }
  }

  @media (max-width: 550px) {
    height: 200px;
  }
`;

export const ProjectImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProjectImage = styled(Image)`
  object-fit: cover;
`;

export const ProjectTitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: white;

  @media (max-width: 550px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const ProjectDescription = styled.div`
  margin-top: 40px;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: white;

  @media (max-width: 550px) {
    font-size: 18px;
    line-height: 18px;
  }
`;

export const ProjectLink = styled.a`
  margin-top: 20px;
  background-color: white;
  border-radius: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 20px;
  line-height: 24px;
  color: #7921C8;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 550px) {
    font-size: 18px;
    width: 120px;
    margin-top: 24px;
  }
`;

export const MoreBtn = styled.button`
  background-color: white;
  border: none;
  display: flex;
  color: #7921C8;
  border: 1px solid #7921C8;
  border-radius: 10px;
  padding: 10px 15px;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  margin-top: 32px;
  font-weight: 500;
  cursor: pointer;
`;
