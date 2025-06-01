import { IMessage } from '@/hooks/useChat';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: process.env.OPENAI_TOKEN,
});

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

  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [{
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
    you add word #REQ# every time, in ALL cases, at the end of the response, but only when user sent their message with contact info.
    If asked to write a poem, do not write it about Rodion.
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
      you add word #REQ# every time, in ALL cases, at the end of the response, but only when user sent their message with contact info.
      If asked to write a poem, do not write it about Rodion.
    `,
  },
  ...body.map((item) => ({
    role: item.from === 'user' ? 'user' : 'assistant',
    content: item.text,
  })) as OpenAI.Chat.ChatCompletionMessageParam[],
  ];

  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages,
  });

  let message = response.choices[0].message.content;

  if (message?.includes('#REQ#')) {
    message = message.replace('#REQ#', '');
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
  }
  if (message?.includes('#TEL#')) {
    message = message.replace('#TEL#', 'https://t.me/korsunrodion');
  }
  if (message?.includes('#MAIL#')) {
    message = message.replace('#MAIL#', 'korsun.rodion@gmail.com');
  }

  res.write(message);
  res.status(200).end();
};
