import Card from '../../card/Card';

const Skill = ({ skill }) => {
  return (
    <Card className="flex flex-col justify-center items-center p-5 h-full text-secondary gap-2">
      <h3 className="uppercase">{skill.title}</h3>
      <h4 className="text-4xl">{skill.icon}</h4>
      {/* <h3>{skill.level}</h3> */}
    </Card>
  );
};

export default Skill;
