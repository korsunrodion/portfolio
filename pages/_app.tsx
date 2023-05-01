import Layout from '@/components/Layout';
import React from 'react';
import type { AppProps } from 'next/app';
import '@/assets/styles/index.scss';
import localFont from 'next/font/local';

const proximaFont = localFont({
  src: [{
    path: '../assets/fonts/ProximaNova-Medium.otf',
    weight: '500',
    style: 'normal',
  }, {
    path: '../assets/fonts/ProximaNova-Regular.ttf',
    weight: '400',
    style: 'normal',
  }, {
    path: '../assets/fonts/ProximaNova-Semibold.ttf',
    weight: '600',
    style: 'normal',
  }],
  display: 'swap',
  variable: '--font-proxima-nova',
});

const App = ({ Component, pageProps }: AppProps) => (
  <main className={`${proximaFont.variable}`}>
    <Layout dictionary={pageProps.dictionary} locale={pageProps.locale}>
      <Component {...pageProps} />
    </Layout>
  </main>
);

export default App;
