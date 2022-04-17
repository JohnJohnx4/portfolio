import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../utils';

const ProjectsPage = () => {
  return (
    <div className='mt-5'>
      <div>
        <div style={{backgroundColor: 'white'}}>
          <div className='mb-5 h3 text-muted text-center'> My Projects</div>
        </div>
      </div>
      <div style={{backgroundColor: 'white'}}>
        <div className='m-auto'>
          {projectsData.map((project, i) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
