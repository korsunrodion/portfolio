import * as S from './styled';
import useChat from '@/hooks/useChat';
import { GlobalContext } from '@/globalContext';
import React, {
  useCallback, useContext, useEffect, useRef, useState,
} from 'react';

const Chat: React.FC = () => {
  const { dictionary } = useContext(GlobalContext);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState('');

  const { messages, loading, sendMessage } = useChat();

  const onSend = useCallback(() => {
    if (!loading && value.trim()) {
      sendMessage(value);
      setValue('');
    }
  }, [sendMessage, value]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onSend();
    }
  }, [sendMessage, value]);

  useEffect(() => {
    if (chatBodyRef.current && Math.abs(chatBodyRef.current.scrollTop + 600 - chatBodyRef.current.scrollHeight) <= 100) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight });
    }
  }, [messages]);

  return (
    <S.Container id='view-chat'>
      <S.Wrapper className='container'>
        <S.Title>{dictionary?.ask}</S.Title>
        <S.ChatContainer>
          <S.ChatBody ref={chatBodyRef}>
            {messages.map((item, index) => (
              <S.ChatItem key={item.text} fromAi={item.from === 'ai'}>
                {item.from === 'ai' && (
                  <S.ChatTitle>{dictionary?.answer}</S.ChatTitle>
                )}
                {index === 0 && (
                  <S.ChatMessage dangerouslySetInnerHTML={{ __html: dictionary.chatGreeting }} />
                )}
                {index > 0 && (
                  <S.ChatMessage dangerouslySetInnerHTML={{ __html: item.text }} />
                )}
              </S.ChatItem>
            ))}
          </S.ChatBody>
          <S.ChatControls>
            <S.ChatInput onKeyDown={onKeyDown} value={value} type='text' onChange={(e) => setValue(e.currentTarget.value)} />
            <S.ChatBtn type='button' onClick={onSend}>Send</S.ChatBtn>
          </S.ChatControls>
        </S.ChatContainer>
      </S.Wrapper>
      <S.Bg />
    </S.Container>
  );
};

export default Chat;
