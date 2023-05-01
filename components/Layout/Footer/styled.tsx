import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100%; */
  /* height: 150px; */
  background-color: #7921C8;
  padding-top: 32px;
  padding-bottom: 24px;
`;

export const Wrapper = styled.div`
  /* margin-bottom: 20px; */
`;

export const Title = styled.h3`
  font-size: 32px;
  line-height: 36px;
  color: white;
`;

export const Links = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Link = styled.a`
  color: white;
  font-size: 18px;
  line-height: 24px;
  transition: opacity 0.1s, text-decoration 0.1s;

  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;
