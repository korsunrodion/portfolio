import Home from '@/components/Home';
import { getDictionary } from '@/utils/getDictionary';
import React from 'react';

interface Props {
  dictionary: {
    [key: string]: any;
  };
  locale: string;
}

interface Params {
  params: { locale: string };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Index = ({ dictionary, locale }: Props) => (
  <Home />
);

export default Index;

export const getServerSideProps = async ({ params }: Params) => {
  const dictionary = await getDictionary(params.locale);

  return {
    props: {
      dictionary,
      locale: params.locale,
    },
  };
};
