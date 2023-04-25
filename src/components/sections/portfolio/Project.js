import Card from '../../card/Card';

const Project = ({ project }) => {
  return (
    <Card className="portfolio bg-gray-50 rounded p-4 text-secondary text-left">
      <div className="portfolio-image">
        <img className="mb-5 rounded" src={project.image} alt={project.title} />
        <h4 className="text-2xl uppercase">{project.title}</h4>
        <p className="mb-3">{project.desc}</p>
        <div className="flex  gap-3 mb-3">
          <a
            href={project.demo}
            className="btn-primary rounded-lg font-bold py-1 px-2 md:px-4"
            rel="noopener noreferrer"
            target="_blank">
            Demo
          </a>
          <a
            href={project.github}
            className="btn-tertiary  rounded-lg font-bold py-1 px-2 md:px-4"
            rel="noopener noreferrer"
            target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Project;
