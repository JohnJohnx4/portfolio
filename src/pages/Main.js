import React, { useState } from 'react';

import Carousel from '../components/Carousel';
import DashboardImg from '../assets/dashboard.png';
import MenuImg from '../assets/menu.png';
import FundopolisImg from '../assets/fundopolis.png';
import NoterImg from '../assets/noter.png';
import HairsprayImg from '../assets/hairspray.png';

const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    {
      src: NoterImg,
      altText: 'Noter App Logo',
      caption: '',
      description:
        'Note taking application built with React. Styled with Material-UI and deployed to Heroku',
      href: 'https://noter.johnpcorreia.com/',
    },
    {
      src: FundopolisImg,
      altText: 'Fundopolis website screepcap',
      caption: '',
      description:
        'About page built with GatsbyJS and Ghost CMS. Deployed with AWS using Lightsail and Amplify',
      href: false,
    },
    {
      src: DashboardImg,
      altText: 'Social Media Dashboard',
      caption: '',
      description:
        'Alpha version for a React Admin Dashboard to moderate content on social media platform',
      href: false,
    },
    {
      src: MenuImg,
      altText: 'Restaurant App',
      caption: '',
      description:
        'Alpha version for an Ionic App that features AR scanning on uploaded target images',
      href: false,
    },
    {
      src: HairsprayImg,
      altText: 'Hairspray App Logo',
      caption: '',
      description:
        'Full Stack Application used to book appointments. React, Node, Mongo, deployed to Heroku and Netlify',
      href: false,
    },
  ];

  return (
    <div>
      <div>
        <div>
          <div className='px-2 mt-5'>
            <div className='text-center'>
              <div tag='h5' className='mb-4'>
                I'm John, a professional software developer.
                <div className='d-none d-sm-block'>
                  I specialize in building apps in React, Node, GraphQL, and
                  much more. Please check out my projects!
                </div>
              </div>
              <Carousel items={items} setCurrentSlide={setCurrentSlide} />
            </div>
            <div>
              <div>{items[currentSlide].description}</div>
              {items[currentSlide].href ? (
                <div href={items[currentSlide].href} target='_blank'>
                  Visit Site &#8811;
                </div>
              ) : (
                <div> </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
