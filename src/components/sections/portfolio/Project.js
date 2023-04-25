import Card from '../../card/Card';

const Project = ({ project }) => {
  return (
    <Card className="portfolio bg-gray-50 rounded p-4 text-secondary text-left h-full">
      <div className="flex flex-col gap-3 h-full">
        <img className="mb-2 rounded" src={project.image} alt={project.title} />
        <h4 className="text-2xl uppercase">{project.title}</h4>

        <h6 className="font-openSans text-slate-500 text-sm leading-8">
          <span className="bg-tertiary text-white mr-2 py-1 px-2  rounded">
            Tech Stack
          </span>
          {project.techStack}
        </h6>
        <p className="mb-2">{project.desc}</p>
        <div className="flex gap-3 mt-auto">
          <a
            href={project.demo}
            className="btn-primary rounded-lg font-bold"
            rel="noopener noreferrer"
            target="_blank">
            Demo
          </a>
          <a
            href={project.github}
            className="btn-tertiary rounded-lg font-bold"
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
