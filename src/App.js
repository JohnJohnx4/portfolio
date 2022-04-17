import MainPage from './pages/Main';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Projects';
import './index.css';

const App = () => {
  return (
    <>
      <AboutPage />
      <MainPage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
};

export default App;
