import Chat from './Chat';
import Hero from './Hero';
import Projects from './Projects';
import React from 'react';

const Home: React.FC = () => (
  <>
    <Hero />
    <Chat />
    <Projects />
  </>
);

export default Home;
