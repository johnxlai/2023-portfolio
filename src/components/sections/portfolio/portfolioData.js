import FingerSpell from '../../../assets/images/portfolio/fingerspelling.png';
import Oracle from '../../../assets/images/portfolio/oracle.png';
import TravelMe from '../../../assets/images/portfolio/travel-me.png';
import JavascriptQuiz from '../../../assets/images/portfolio/coding-quiz-challenge.png';
import TriMacToyota from '../../../assets/images/portfolio/tri-mac-toyota.png';
import GatewayHyundai from '../../../assets/images/portfolio/gateway-hyundai.jpg';
import MovieTrivia from '../../../assets/images/portfolio/movie-trivia.jpg';

const PortfolioData = [
  {
    id: 1,
    category: 'Full Stack',
    image: FingerSpell,
    title: 'FingerSpelling Game - Learn ASL',
    desc: 'An app for learning how to finger spell with American sign language. The user will be prompt with images of signs in alphabet which will make up of words. And user will then insert an answer to try to guess the word that is shown in sign language.​',
    techStack:
      'Node, Express, MySql, JavaScript, HTML, SCSS, Tailwind, Heroku, Git',
    demo: 'https://asl-fingerspelling-game.herokuapp.com/',
    github: 'https://github.com/johnxlai/asl-fingerspelling-game',
  },
  {
    id: 2,
    category: 'Full Stack',
    image: Oracle,
    title: 'Oracle - AI Fortune Teller',
    desc: 'Oracle is MERN stack project that incorporates OpenAI to make predictions using Tarot Cards. Web Speech Recognition API to receive user voice inputs, as well as Googles Text-to-Speech API to have a computer-generated voice reading out the prediction results.',
    techStack:
      'MongoDB, Express, React, Node, GraphQl, JavaScript, HTML, SCSS, Tailwind, Heroku, Git',
    demo: 'https://oracle-online.herokuapp.com/',
    github: 'https://github.com/winglovecola/oracle',
  },
  {
    id: 3,
    category: 'Front End',
    image: TravelMe,
    title: 'Travel Me',
    desc: 'An application where a user can choose from the dropdown for a travel destination (country) and see description of country, images and currency exchange rate. The search history its stored in the local storage. Three APIs were used for this project. (Media Wiki, Unsplash, Exchange)',
    techStack: 'JavaScript, HTML, SCSS, Tailwind, Bootstrap Slider, Git',
    demo: 'https://johnxlai.github.io/travel-app/',
    github: 'https://github.com/johnxlai/travel-app',
  },
  {
    id: 4,
    category: 'Front End',
    image: JavascriptQuiz,
    title: 'JavaScript Quiz Challenge',
    desc: 'Javascript Coding Quiz Challage Game is written in vanila Javascript, it uses the localStorage object to store players information at the end of the game.',
    techStack: 'JavaScript, HTML, Bootstrap, Git',
    demo: 'https://johnxlai.github.io/javascript-code-quiz/',
    github: 'https://github.com/johnxlai/javascript-code-quiz',
  },
  {
    id: 5,
    category: 'Front End',
    image: TriMacToyota,
    title: 'Tri Mac Toyota',
    desc: 'A wordpress website build with Tailwind. This build uses the Carpages API, advanced custom fields, gravity forms, and slick slider.',
    techStack:
      'Twig, JavaScript, Jquery, HTML, SCSS, Tailwind, ACF, Gravity Forms, Git',
    demo: 'https://trimactoyota.ca/',
  },
  {
    id: 6,
    category: 'Front End',
    image: GatewayHyundai,
    title: 'Gateway Hyundai',
    desc: 'A wordpress website build with Bootstrap. This build uses the Carpages API, advanced custom fields, gravity forms',
    techStack:
      'Twig, JavaScript, Jquery, HTML, SCSS, Bootstrap, ACF, Gravity Forms, Git',
    demo: 'https://gatewayhyundai.ca/',
  },
  {
    id: 7,
    category: 'Front End',
    image: MovieTrivia,
    title: 'Movie Trivia',
    desc: 'A',
    techStack:
      'Twig, JavaScript, Jquery, HTML, SCSS, Bootstrap, ACF, Gravity Forms, Git',
    demo: 'https://gatewayhyundai.ca/',
  },
];

export default PortfolioData;
