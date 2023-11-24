import {
  useCallback, useEffect, useRef, useState,
} from 'react';

export interface IMessage {
  from: 'user' | 'ai';
  text: string;
}

const useChat = () => {
  const messagesRef = useRef<IMessage[]>([]);

  const [messages, setMessages] = useState<IMessage[]>([{
    from: 'ai',
    text: '**greeting**',
  }]);
  const [loading, setLoading] = useState(false);

  const formatMessage = (s: string) => {
    let result = s;
    result = result.replace(/\n/g, '<br>');
    result = result.replace(/\{telegram\}/g, `
      <a href="https://t.me/korsunrodion" target="_blank">
        @korsunrodion
      </a>
    `);
    result = result.replace(/\{email\}/g, `
      <a href="mailto:korsun.rodion@gmail.com" target="_blank">
        korsun.rodion@gmail.com
      </a>
    `);
    return result;
  };

  const addMessage = useCallback((message: IMessage[]) => {
    setMessages([...messagesRef.current, ...message]);
  }, []);

  const addToLastMessage = useCallback((chunk: string) => {
    setMessages([
      ...messagesRef.current.slice(0, messagesRef.current.length - 1),
      {
        from: 'ai',
        text: (messagesRef.current.at(-1)?.text || '') + chunk,
      },
    ]);
  }, []);

  const sendMessage = useCallback(async (q: string) => {
    if (loading) {
      return;
    }

    const body = [...messagesRef.current, {
      from: 'user',
      text: q.trim(),
    }];

    addMessage([{
      from: 'user',
      text: q.trim(),
    }, {
      from: 'ai',
      text: '',
    }]);
    setLoading(true);

    fetch('/api/chat-send', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.body)
      .then((rb) => {
        if (rb) {
          const reader = rb.getReader();
          const decoder = new TextDecoder('utf-8');

          return new ReadableStream({
            start(controller) {
              function push() {
                reader.read().then(({ done, value }) => {
                  console.log(value);
                  if (done) {
                    controller.close();
                    setLoading(false);
                    return;
                  }

                  const message = decoder.decode(value);
                  addToLastMessage(formatMessage(message));
                  controller.enqueue(value);
                  push();
                });
              }

              push();
            },
          });
        }
        return null;
      });
  }, [addToLastMessage]);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  return {
    messages,
    loading,
    sendMessage,
  };
};

export default useChat;
