import { IMessage } from '@/hooks/useChat';
import axios, { AxiosRequestConfig } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  const { body }: { body: IMessage[] } = req;

  if (body.length === 0) {
    res.status(400);
    return;
  }

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Transfer-Encoding', 'chunked');
  res.flushHeaders();

  const requestBody = {
    model: 'gpt-4',
    stream: true,
    messages: [{
      role: 'system',
      content: `
        You are an AI assistant representing Rodion Korsun. Your task is to respond on Rodion's behalf,
        in polite, precise, and informal manner. You should respond to any question or message
        not about Rodion normally, and respond with information that could potentially help Rodion get hired by
        the user when asked about Rodion. Keep the responses simple.\n\n
        Rodion has experience with following technologies: React,Vue,Next.js,Redux,Mobx,Sass,Less,
        React-spring,Gsap,Playwright,Jest,Storybook,AWS,Firebase,Heroku,Flask,Django,Node.js,Express,
        Spring stack,SQL,PHP,Laravel. You, the Assistant, can assume that Rodion is familiar with any front-end library, but suggest to ask Rodion directly in response.\n\n
        When user wants to contact Rodion, use can respond using #TEL# for Telegram app, without @ symbol, and #MAIL# for email variables.
        You can suggest to take a message for Rodion. When user wants you to pass message for Rodion,
        you add word #REQ# every time, in ALL cases, at the end of the response, when user sent theirs message.
      `,
    }, {
      role: 'user',
      content: `
        You are an AI assistant representing Rodion Korsun. Your task is to respond on Rodion's behalf,
        in polite, precise, and informal manner. You should respond to any question or message
        not about Rodion normally, and respond with information that could potentially help Rodion get hired by
        the user when asked about Rodion. Keep the responses simple.\n\n
        Rodion has experience with following technologies: React,Vue,Next.js,Redux,Mobx,Sass,Less,
        React-spring,Gsap,Playwright,Jest,Storybook,AWS,Firebase,Heroku,Flask,Django,Node.js,Express,
        Spring stack,SQL,PHP,Laravel. You, the Assistant, can assume that Rodion is familiar with any front-end library, but suggest to ask Rodion directly in response.\n\n
        When user wants to contact Rodion, use can respond using #TEL# for Telegram app, without @ symbol, and #MAIL# for email variables.
        You can suggest to take a message for Rodion. When user wants you to pass message for Rodion,
        you add word #REQ# every time, in ALL cases, at the end of the response, when user sent theirs message.
      `,
    }, ...body.map((item) => ({
      role: item.from === 'user' ? 'user' : 'assistant',
      content: item.text,
    }))],
  };

  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_TOKEN}`,
      'Content-Type': 'application/json',
    },
    responseType: 'stream',
  };

  const response = await axios.post('https://api.openai.com/v1/chat/completions', requestBody, config);

  let command = '';
  let waitingForCommand = false;

  response.data.on('data', (chunk: string) => {
    if (!chunk.toString().includes('[DONE]')) {
      const messages = chunk.toString().trim().split('\n\n').map((item) => item.slice(6));
      for (const i of messages) {
        const json = JSON.parse(i);
        if (json.choices.length > 0 && json.choices[0]?.delta?.content) {
          let responseText = json.choices[0].delta.content;

          if (waitingForCommand) {
            const pos = responseText.indexOf('#');
            if (pos === -1) {
              command += responseText;
            } else {
              command += responseText.slice(0, pos);
            }
          }

          if (responseText.includes('#')) {
            if (waitingForCommand) {
              if (command === 'REQ') {
                responseText = '';
                axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
                  chat_id: '376907585',
                  text: JSON.stringify(body),
                }).then((telegramResponse) => {
                  if (telegramResponse.status !== 200) {
                    fs.appendFile('logs.txt', JSON.stringify(body), (err) => {
                      console.log('Error occured writing logs', err);
                    });
                  }
                }).catch(() => {
                  fs.appendFile('logs.txt', JSON.stringify(body), (err) => {
                    console.log('Error occured writing logs', err);
                  });
                });
              } else if (command === 'TEL') {
                responseText = '{telegram}';
              } else if (command === 'MAIL') {
                responseText = '{email}';
              }
              command = '';
            }
            waitingForCommand = !waitingForCommand;
          }
          if (!waitingForCommand) {
            res.write(responseText);
          }
        }
      }
    }
  });

  response.data.on('end', () => {
    res.status(200).end();
  });
};
