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
  }, [sendMessage, value, loading]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSend();
    }
  }, [onSend]);

  useEffect(() => {
    if (chatBodyRef.current && Math.abs(chatBodyRef.current.scrollTop + 600 - chatBodyRef.current.scrollHeight) <= 100) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight });
    }
  }, [messages]);

  return (
    <section id='view-chat' className='mt-24 bg-surface py-14 md:py-20'>
      <div className='container grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-16'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-[28px] font-bold tracking-[-0.02em] md:text-[32px]'>{dictionary?.ask}</h2>
          <p className='text-base leading-relaxed text-body'>{dictionary?.askLead}</p>
        </div>
        <div className='overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_3px_rgba(25,26,32,.05)]'>
          <div className='flex items-center gap-2.5 border-b border-line px-5 py-3.5'>
            <span className='h-2 w-2 rounded-full bg-online' />
            <span className='text-[13px] font-semibold'>{dictionary?.answer}</span>
            <span className='ml-auto font-mono text-[11px] text-muted'>online</span>
          </div>
          <div ref={chatBodyRef} className='flex max-h-[420px] min-h-[180px] flex-col gap-3 overflow-y-auto p-5'>
            {messages.map((item, index) => (
              <div
                key={`${item.text}-${item.from}`}
                className={item.from === 'ai'
                  ? 'max-w-[520px] self-start rounded-[10px_10px_10px_3px] bg-chip px-4 py-3 text-[14.5px] leading-relaxed text-ink [&_a]:font-semibold [&_a]:text-accent [&_a]:underline'
                  : 'max-w-[420px] self-end rounded-[10px_10px_3px_10px] bg-accent px-4 py-3 text-[14.5px] leading-relaxed text-white'}
              >
                {index === 0 && (
                  <span dangerouslySetInnerHTML={{ __html: dictionary.chatGreeting }} />
                )}
                {index > 0 && !item.text && (
                  <span className='flex gap-1 py-1'>
                    <span className='h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:0ms]' />
                    <span className='h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:150ms]' />
                    <span className='h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:300ms]' />
                  </span>
                )}
                {index > 0 && item.text && (
                  <span dangerouslySetInnerHTML={{ __html: item.text }} />
                )}
              </div>
            ))}
          </div>
          <div className='flex gap-2.5 border-t border-line px-5 py-3.5'>
            <input
              type='text'
              value={value}
              placeholder={dictionary?.placeholder}
              onKeyDown={onKeyDown}
              onChange={(e) => setValue(e.currentTarget.value)}
              className='min-w-0 flex-1 rounded-lg border border-line-strong px-4 py-[11px] text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-accent'
            />
            <button
              type='button'
              onClick={onSend}
              className='rounded-lg bg-ink px-5 py-[11px] text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50'
              disabled={loading}
            >
              {dictionary?.send}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
