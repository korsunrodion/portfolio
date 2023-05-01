import Footer from './Footer';
import Header from './Header';
import * as S from './styled';
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
    <S.Container>
      {children}
    </S.Container>
    <Footer />
  </GlobalContextComponent>
);

export default Layout;
