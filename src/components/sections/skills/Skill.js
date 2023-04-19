import Card from '../../card/Card';

const Skill = ({ skill }) => {
  return (
    <Card className="bg-white rounded">
      <h3>{skill.title}</h3>
      <h3>{skill.level}</h3>
    </Card>
  );
};

export default Skill;
