import Home from '@/components/Home';
import Projects, { IProject } from '@/data/projects';
import { getDictionary } from '@/utils/getDictionary';
import { getPlaiceholder } from 'plaiceholder';
import React from 'react';

interface Props {
  dictionary: {
    [key: string]: any;
  };
  locale: string;
  projects: IProject[];
}

interface Params {
  params: { locale: string };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Index = ({ dictionary, locale, projects }: Props) => (
  <Home projects={projects} />
);

export default Index;

const getProjectsWithImage = async () => {
  const result = await Promise.all(
    Projects.map(async (item) => {
      const imgFilled = await getPlaiceholder(item.img);
      return {
        ...item,
        imgFilled,
      };
    }),
  ).then((values) => values);

  return result;
};

export const getServerSideProps = async ({ params }: Params) => {
  const dictionary = await getDictionary(params.locale);
  const projects = await getProjectsWithImage();

  return {
    props: {
      dictionary,
      locale: params.locale,
      projects,
    },
  };
};
