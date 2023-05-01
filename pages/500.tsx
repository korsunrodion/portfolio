import { getDictionary } from '@/utils/getDictionary';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface Props {
  dictionary: {
    [key: string]: any;
  };
  locale: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Index = ({ dictionary, locale }: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  });

  return null;
};

export const getStaticProps = async () => {
  const dictionary = await getDictionary('en');

  return {
    props: {
      dictionary,
      locale: 'en',
    },
  };
};

export default Index;
