import React from 'react';
// import { Jumbotron, Button } from 'reactstrap';

const Billboard = (props) => {
  return (
    <div>
      <div className='py-5'>
        <h1 className='display-5'>I am currently looking for work!</h1>
        <p className='lead'>Are you looking for a full-stack developer?</p>
        <hr className='my-2' />
        <p>
          I am seeking out a new oppurtunity to utilize my skills as a web
          developer in order to build out projects with clean, maintainable
          code. Please do not hesitate to contact me with your next project!
        </p>
        <p className='mt-4'>
          <div
            className='mr-2 mt-1'
            outline 
            variant='link'
            color='primary'
            style={{minWidth: '120px'}}
            href='https://drive.google.com/file/d/1_iMU5bTAD9vc7q0MyG6soGdND9IugVmT/view?usp=sharing'
            target='_blank'
          >
            Resume
          </div>
          <div
            className='mr-2 mt-1'
            outline 
            variant='link'
            color='primary'
            style={{minWidth: '120px'}}
            href='mailto:johnpaulcorreia@gmail.com'
          >
            Email
          </div>
          <div
            className='mr-2 mt-1'
            outline 
            variant='link'
            color='primary'
            style={{minWidth: '120px'}}
            target='_blank'
            href='https://github.com/JohnJohnx4'
          >
            Github
          </div>
          <div
            className='mr-2 mt-1'
            outline 
            variant='link'
            color='primary'
            style={{minWidth: '120px'}}
            target='_blank'
            href='https://www.linkedin.com/in/john-correia/'
          >
            LinkedIn
          </div>
        </p>
      </div>
    </div>
  );
};

export default Billboard;
