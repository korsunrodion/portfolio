interface IProjectData {
  id: number,
  title: string;
  stack: string;
  link: string;
  img: string;
}

export interface IProject extends IProjectData {
  imgFilled?: { base64: string, img: { src: string } };
}

const Projects: IProject[] = [{
  id: 0,
  title: 'Andoni Law [in test]',
  stack: 'React, Next.js, Strapi',
  link: 'https://andoni-test.herokuapp.com/',
  img: '/images/andoni.webp',
}, {
  id: 1,
  title: 'Supreme Observer [in test]',
  stack: 'React, Next.js, Strapi, Elasticsearch',
  link: 'http://supreme-test.site/',
  img: '/images/supreme.webp',
}, {
  id: 3,
  title: 'Smotrow Related',
  stack: 'Vue, Nuxt, Laravel, Laravel Nova',
  link: 'https://smotrowrelated.com/',
  img: '/images/smotrowrelated.webp',
}, {
  id: 4,
  title: 'Justnote',
  stack: 'Angular',
  link: 'https://andoni-test.herokuapp.com/',
  img: '/images/justnote.webp',
}, {
  id: 5,
  title: 'Virtonomy.io',
  stack: 'React, Next.js, Flask, Webassembly',
  link: 'https://www.virtonomy.io/',
  img: '/images/virtonomy.webp',
}, {
  id: 6,
  title: 'Boardova',
  stack: 'React, Next.js, Directus',
  link: 'https://boardova.com',
  img: '/images/boardova.webp',
}];

export default Projects;
