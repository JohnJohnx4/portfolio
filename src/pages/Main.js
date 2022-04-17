import React, { useState } from 'react';

const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div style={{backgroundColor: 'white'}} className='px-2 mt-5'>
      <div className='text-center'>
        <div tag='h5' className='mb-4'>
          I'm John, a professional software developer.
          <div className='d-none d-sm-block'>
            I specialize in building apps in React, Node, GraphQL, and much more. Please check out my projects!
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
