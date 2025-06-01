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
  id: 1,
  title: 'Supreme Court of Ukraine\'s Observer',
  stack: 'React, Next.js, Strapi, Elasticsearch',
  link: 'https://so.supreme.court.gov.ua/',
  img: '/images/supreme.webp',
},
{
  id: 7,
  title: 'CD Keys',
  stack: 'React, Node.js, Express',
  link: 'https://cdkeys.com/',
  img: '/images/cd_keys.webp',
},
{
  id: 0,
  title: 'Andoni Law',
  stack: 'React, Next.js, Strapi',
  link: 'https://andonilaw.com/',
  img: '/images/andoni2.webp',
},
{
  id: 8,
  title: 'XGateway',
  stack: 'React, Next.js, Node.js, Express',
  link: 'https://xgateway.tech/',
  img: '/images/xgateway.webp',
},
{
  id: 12,
  title: 'LiveTicketGroup',
  stack: 'React, Next.js, Python, Flask',
  link: 'https://www.livefootballtickets.com/',
  img: '/images/ltg.webp',
},
{
  id: 10,
  title: 'Garantme',
  stack: 'React, Next.js, Python, Flask',
  link: 'https://garantme.com/',
  img: '/images/garantme.webp',
},
{
  id: 9,
  title: 'Echoes',
  stack: 'React, Next.js, Node.js, NestJS',
  link: 'https://echoes.xyz/',
  img: '/images/echoes.webp',
},
{
  id: 3,
  title: 'Smotrow Related',
  stack: 'Vue, Nuxt, Laravel, Laravel Nova',
  link: 'https://smotrowrelated.com/',
  img: '/images/smotrowrelated.webp',
},
{
  id: 11,
  title: 'Lorgar',
  stack: 'React, Next.js, Node.js, Express',
  link: 'https://lorgar.com/',
  img: '/images/lorgar.webp',
},
{
  id: 12,
  title: 'Proto',
  stack: 'React, Next.js, Node.js, Express',
  link: 'https://www.protosimulator.com/',
  img: '/images/proto.webp',
},
{
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
