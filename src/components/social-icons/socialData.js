import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsFiletypeDocx } from 'react-icons/bs';

const data = [
  {
    id: 1,
    link: 'https://www.linkedin.com/in/johnxlai',
    icon: <AiFillLinkedin size={20} />,
  },
  {
    id: 2,
    link: 'https://github.com/johnxlai',
    icon: <AiFillGithub size={20} />,
  },
  {
    id: 3,
    link: '../../../assets/resume/john-lai-resume.pdf',
    icon: <BsFiletypeDocx size={20} />,
  },
];

export default data;
