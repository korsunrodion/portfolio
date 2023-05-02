import Chat from './Chat';
import Hero from './Hero';
import Projects from './Projects';
import { IProject } from '@/data/projects';
import React from 'react';

interface Props {
  projects: IProject[];
}

const Home: React.FC<Props> = ({ projects }) => (
  <>
    <Hero />
    <Chat />
    <Projects projects={projects} />
  </>
);

export default Home;
