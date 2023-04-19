import Project from './Project';

const Projects = ({ projects }) => {
  return (
    <div className="portfolio-projects grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};
export default Projects;
