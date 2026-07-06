import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head>
        <title>Rodion Korsun, portfolio</title>
        <meta name='description' content='Rodion Korsun, portfolio' />
        <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
