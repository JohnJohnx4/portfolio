import MenuImg from './assets/images/projects/mage.png';
import TacoImg from './assets/images/projects/taco.png';

export const projectsData = [
  {
    img: MenuImg,
    title: 'Noter',
    subtitle: 'React',
    description:
      'Note taking application built with ReactJS. Users are able log in and add, edit, or delete notes.',
    href: 'https://noter.johnpcorreia.com/'
  },
  {
    img: TacoImg,
    title: 'Creative Taco',
    subtitle: 'React',
    description: 'Design/ Development Agency website created as a personal project.',
    href: 'https://creative-taco.com/'
  },
  {
    img: MenuImg,
    title: 'Social Media Dashboard',
    subtitle: 'MVP for a React Admin Dashboard',
    description:
      'Alpha version built using React to model the Admin side of a social media app. Primarily used to moderate flagged user content. (Blurred for client privacy)',
    href: false
  },
  {
    img: MenuImg,
    title: 'Restaurant App',
    subtitle: 'MVP for an Ionic App',
    description:
      'Alpha version built using Ionic. I was able to integrate an AR package called Wikitude to get the app to recognize specific target images and render a 3D model. (Styles changed for client privacy)',
    href: false
  },
  {
    img: MenuImg,
    title: 'Hairspray',
    subtitle: 'MERN Stack',
    description:
      'A fullstack application built with React, Node, Express, and MongoDB, deployed to Heroku. (Was originally hosted by school, working on rehosting on personal domain)',
    href: false
  },
  {
    img: MenuImg,
    title: 'Shattered Iron',
    subtitle: 'Unity WebGL Game',
    description:
      'Hackathon project of an attempt to build a Twisted Metal type game in less than 48 hours. (May take a while to load, hardware intensive)',
    href: 'https://shattered-iron.herokuapp.com/'
  }
];
