import Card from '../../card/Card';

const Project = ({ project }) => {
  return (
    <Card className="portfolio bg-white rounded p-4 text-secondary">
      <div className="portfolio-image">
        <img className="mb-3" src={project.image} alt={project.title} />
        <h4 className="text-2xl">{project.title}</h4>
        <p className="mb-3">{project.desc}</p>
        <div className="flex gap-3 mb-3">
          <a
            href={project.demo}
            className="btn-primary"
            rel="noopener noreferrer"
            target="_blank">
            Demo
          </a>
          <a
            href={project.github}
            className="bg-primary text-secondary py-3 rounded p-3 block"
            rel="noopener noreferrer"
            target="_blank">
            Demo
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Project;
