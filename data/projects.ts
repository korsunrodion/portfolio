export interface IProject {
  id: number,
  title: string;
  stack: string;
  link: string;
  img: string;
}

const Projects: IProject[] = [{
  id: 0,
  title: 'Andoni Law [in test]',
  stack: 'React, Next.js, Strapi',
  link: 'https://andoni-test.herokuapp.com/',
  img: '/images/andoni.png',
}, {
  id: 1,
  title: 'Supreme Observer [in test]',
  stack: 'React, Next.js, Strapi, Elasticsearch',
  link: 'http://supreme-test.site/',
  img: '/images/supreme.png',
}, {
  id: 3,
  title: 'Smotrow Related',
  stack: 'Vue, Nuxt, Laravel, Laravel Nova',
  link: 'https://smotrowrelated.com/',
  img: '/images/smotrowrelated.png',
}, {
  id: 4,
  title: 'Justnote',
  stack: 'Angular',
  link: 'https://andoni-test.herokuapp.com/',
  img: '/images/justnote.png',
}, {
  id: 5,
  title: 'Virtonomy.io',
  stack: 'React, Next.js, Flask, Webassembly',
  link: 'https://www.virtonomy.io/',
  img: '/images/andoni.png',
}, {
  id: 6,
  title: 'Boardova',
  stack: 'React, Next.js, Directus',
  link: 'https://boardova.com',
  img: '/images/boardova.png',
}];

export default Projects;
