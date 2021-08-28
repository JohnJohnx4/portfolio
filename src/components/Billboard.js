import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Billboard = (props) => {
  return (
    <div>
      <Jumbotron className='py-5'>
        <h1 className='display-5'>I am currently employed</h1>
        <p className='lead'>Front-end Developer at Elevux</p>
        <hr className='my-2' />
        <p>
          Creating elevated front-end 3D, web based experiences.
        </p>
        <p className='mt-4'>
          <Button
            className='mr-2 mt-1'
            outline 
            variant='link'
            color='primary'
            style={{minWidth: '120px'}}
            href='https://drive.google.com/file/d/1_iMU5bTAD9vc7q0MyG6soGdND9IugVmT/view?usp=sharing'
            target='_blank'
          >
            Resume
          </Button>
          <Button
            className='mr-2 mt-1'
            outline 
            variant='link'
            color='primary'
            style={{minWidth: '120px'}}
            href='mailto:johnpaulcorreia@gmail.com'
          >
            Email
          </Button>
          <Button
            className='mr-2 mt-1'
            outline 
            variant='link'
            color='primary'
            style={{minWidth: '120px'}}
            target='_blank'
            href='https://github.com/JohnJohnx4'
          >
            Github
          </Button>
          <Button
            className='mr-2 mt-1'
            outline 
            variant='link'
            color='primary'
            style={{minWidth: '120px'}}
            target='_blank'
            href='https://www.linkedin.com/in/john-correia/'
          >
            LinkedIn
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Billboard;
