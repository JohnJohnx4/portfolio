
const ProjectCard = ({ project }) => {
  const { img, title, subtitle, description, href } = project;
  return (
    <div className='mb-4' style={{ minWidth: '315px' }}>
      <img top width='50%' src={img} alt='Card image cap' />
      <div>
        <div tag='h5'>{title}</div>
        <div tag='h6' className='mb-2 text-muted'>
          {subtitle}
        </div>
        <div>{description}</div>
        {href ? (
          <div href={href} target='_blank'>
            Visit Site &#8811;
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
