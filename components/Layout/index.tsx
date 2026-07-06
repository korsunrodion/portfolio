import Footer from './Footer';
import Header from './Header';
import GlobalContextComponent from '@/globalContext';
import React from 'react';

interface Props {
  dictionary: {
    [key: string]: any;
  };
  locale: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ dictionary, locale, children }) => (
  <GlobalContextComponent dictionary={dictionary}>
    <Header locale={locale} />
    <div className='pt-16'>
      {children}
    </div>
    <Footer />
  </GlobalContextComponent>
);

export default Layout;
