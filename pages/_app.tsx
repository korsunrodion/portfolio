import Layout from '@/components/Layout';
import React from 'react';
import type { AppProps } from 'next/app';
import '@/assets/styles/fonts.css';
import '@/assets/styles/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout dictionary={pageProps.dictionary} locale={pageProps.locale}>
    <Component {...pageProps} />
  </Layout>
);

export default App;
