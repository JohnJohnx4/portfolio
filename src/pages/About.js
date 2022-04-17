import ProfileImg1 from '../assets/profile1.jpg';
import ProfileImg2 from '../assets/profile2.jpg';

const AboutPage = () => {
  return (
    <div>
      <div>
        <div>
          <div className='p-3 my-5'>
            <div tag='h4' className='ml-2 mb-3'>About Me</div>
            <div>
              <div className='w-50' style={{maxWidth: '350px'}}>
                <img
                  src={ProfileImg1}
                  className='img-fluid img-thumbnail float-left mr-4 mb-2'
                />
              </div>
              <div>
                <p>
                  My name is John P. Correia, and I have been a professional Web
                  Developer for more than two years now. I enjoy creating user
                  interfaces in React, developing APIs in Node and Express, and
                  utilizing MongoDB, GraphQL, and MySQL databases. I have a
                  large amount of experience turning design prototypes into functional
                  apps.
                  <br />
                  <br />I have worked mainly for startups and am very
                  comfortable in that fast-paced environment. Tools I have used
                  include Github, Bitbucket, Jira, Trello, and I am comfortable
                  in both Windows and macOS environments. I am very experienced in
                  React and Javascript but can pick up new frameworks and
                  languages quickly.
                  <br />
                  <br />
                  I love to experiment with creating 3D experiences in React and BabylonJS.
                  In my spare time, I enjoy playing games online with friends,
                  streaming on Twitch occasionally. I also enjoy watching anime
                  and tv shows. I try to stay active by working out in my garage
                  gym, lifting weights.
                  <br />
                  <br />
                  Thank you for taking the time to read about me!
                </p>
                <p>Thank you for taking the time to read about me!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
