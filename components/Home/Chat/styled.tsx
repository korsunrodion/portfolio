import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 120px;
  position: relative;

  @media (max-width: 1080px) {
    margin-top: 240px;
  }

  @media (max-width: 550px) {
    margin-top: 140px;
  }
`;

export const Wrapper = styled.div`

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

export const ChatContainer = styled.div`
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 0 12px 16px 12px;
  display: flex;
  flex-direction: column;
  height: 600px;
  box-shadow: 0px 9px 9px #A8A8A829;

  @media (max-width: 768px) {
    padding: 0 6px 8px 12px;
  }
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
  overflow-y: auto;
  padding-top: 24px;
  padding-bottom: 12px;
  padding-right: 0px;

  scrollbar-color: #707B86 #EAEDF2;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: #EAEDF2;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    background-clip: content-box;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #707B86;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    padding-top: 18px;
    padding-right: 6px;
  }
`;

export const ChatItem = styled.div<{ fromAi: boolean }>`
  background-color: ${(props) => (props.fromAi ? 'rgba(121, 33, 200, 0.05)' : 'rgba(121, 33, 200, 0.2)')};
  width: fit-content;
  padding: 8px 12px;
  border-radius: 10px;
  @media (max-width: 1024px) {
    margin-left: ${(props) => (props.fromAi ? '0' : 'auto')};
  }
`;

export const ChatTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #222;
  width: 100px;
  margin-bottom: 6px;
`;

export const ChatMessage = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
`;

export const ChatControls = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const ChatInput = styled.input`
  height: 50px;
  padding: 12px 24px;
  flex-grow: 1;
  border-radius: 10px;
  background-color: #F3F4FF;
  border: none;
  color: #222;
  font-size: 20px;
`;

export const ChatBtn = styled.button`
  height: 50px;
  padding: 12px 24px;
  background: #8280FC;
  border-radius: 10px;
  border: none;
  color: white;
  cursor: pointer;
  transition: opacity 0.1s;

  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Bg = styled.div`
  position: absolute;
  top: 374px;
  background-color: rgba(121, 33, 200, 0.05);
  width: 100%;
  height: 968px;
  z-index: -1;
`;

export const Loader = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #8280FC;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
`;
