import Card from '../../card/Card';

const Project = ({ project }) => {
  return (
    <div>
      <Card className="portfolio">
        <div className="portfolio-image">
          {project.title}
          <img src="" alt="" />
        </div>
      </Card>
    </div>
  );
};

export default Project;
