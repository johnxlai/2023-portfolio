import {
  AiFillHtml5,
  AiOutlineSketch,
  AiFillGithub,
  AiFillGitlab,
} from 'react-icons/ai';

import {
  SiApollographql,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiHandlebarsdotjs,
  SiInsomnia,
  SiWebpack,
  SiJest,
} from 'react-icons/si';

import { FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';

import { GrGraphQl, GrMysql } from 'react-icons/gr';
import { DiNpm, DiHeroku } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { TbBrandNextjs } from 'react-icons/tb';

const skillsData = [
  { id: 1, title: 'HTML5', icon: <AiFillHtml5 /> },
  { id: 2, title: 'CSS', icon: <FaCss3Alt /> },
  { id: 3, title: 'JavaScript', icon: <SiJavascript /> },
  { id: 4, title: 'React', icon: <FaReact /> },
  { id: 5, title: 'NodeJs', icon: <FaNodeJs /> },
  { id: 6, title: 'MongoDB', icon: <SiMongodb /> },
  { id: 7, title: 'Tailwind', icon: <SiTailwindcss /> },
  { id: 8, title: 'Bootstrap', icon: <BsFillBootstrapFill /> },
  { id: 9, title: 'Handlebars', icon: <SiHandlebarsdotjs /> },
  { id: 10, title: 'Heroku', icon: <DiHeroku /> },
  { id: 11, title: 'NPM', icon: <DiNpm /> },
  { id: 12, title: 'Webpack', icon: <SiWebpack /> },
  { id: 13, title: 'Github', icon: <AiFillGithub /> },
  { id: 14, title: 'Gitlab', icon: <AiFillGitlab /> },
  { id: 15, title: 'MySql', icon: <GrMysql /> },
  { id: 16, title: 'GraphQl', icon: <GrGraphQl /> },
  { id: 17, title: 'Apollo', icon: <SiApollographql /> },
  { id: 18, title: 'Jest', icon: <SiJest /> },
  { id: 19, title: 'Insomnia', icon: <SiInsomnia /> },
  { id: 20, title: 'Figma', icon: <FiFigma /> },
  { id: 21, title: 'Illustrator', icon: <SiAdobeillustrator /> },
  { id: 22, title: 'Sketch', icon: <AiOutlineSketch /> },
  { id: 23, title: 'PhotoShop', icon: <SiAdobephotoshop /> },
  // { id: 24, title: 'NextJs', icon: <TbBrandNextjs /> },
];

export default skillsData;
