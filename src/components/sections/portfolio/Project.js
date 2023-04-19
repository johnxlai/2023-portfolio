import Card from '../../card/Card';

const Project = ({ project }) => {
  return (
    <div>
      <Card className="portfolio">
        <div className="portfolio-image">
          <img src={project.image} alt={project.title} />
          <h4>{project.title}</h4>
          <p>{project.desc}</p>
          <div className="flex gap-3 mb-3">
            <a
              href={project.demo}
              className="btn-primary block"
              rel="noopener noreferrer"
              target="_blank">
              Demo
            </a>
            <a
              href={project.github}
              className="btn-primary block"
              rel="noopener noreferrer"
              target="_blank">
              Demo
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Project;
