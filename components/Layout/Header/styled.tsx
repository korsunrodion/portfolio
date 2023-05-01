import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.header<{ shadow: boolean, shown: boolean }>`
  width: 100%;

  padding-top: 36px;
  padding-bottom: 36px;
  position: sticky;
  top: ${(props) => (props.shown ? '0' : '-100px')};
  background-color: white;
  z-index: 100;
  transition: top 0.2s, box-shadow 0.2s;
  box-shadow: ${(props) => (props.shadow ? '0px 3px 3px #A8A8A829' : '')};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const LeftLink = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #222222;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.1s;
  user-select: none;

  @media (hover: hover) {
    &:hover {
      color: #7921C8;
    }
  }
`;

export const RightLink = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #222222;
  cursor: pointer;
  transition: color 0.1s;

  @media (hover: hover) {
    &:hover {
      color: #7921C8;
    }
  }
`;

export const RightLocale = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #222222;
  text-transform: uppercase;
`;

export const RightLocalesWrapper = styled.div`
  cursor: pointer;
  position: relative;
`;

export const RightLocalesMenuWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  padding-top: 16px;
`;

export const RightLocalesMenu = styled.div<{ visible: boolean }>`
  margin-top: 16px;
  background-color: white;
  border: 1px solid #666;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'all' : 'none')};
  transition: opacity 0.2s;
  border-radius: 5px;
`;

export const RightLocalesMenuItem = styled(Link)<{ hidden: boolean }>`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #222222;
  text-transform: uppercase;
  padding: 8px;
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`;
