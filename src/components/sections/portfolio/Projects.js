import Project from './Project';

const Projects = ({ projects }) => {
  return (
    <div
      className="portfolio-projects grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 items-start"
      data-aos="fade-up">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};
export default Projects;
