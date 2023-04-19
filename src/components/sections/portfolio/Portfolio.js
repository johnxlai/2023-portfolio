import React from 'react';
import Card from '../../card/Card';
import PortfolioData from './portfolioData';
import Projects from './Projects';
import ProjectsCategories from './ProjectsCategories';
import { useState } from 'react';
const Portfolio = () => {
  const [projects, setProjects] = useState(PortfolioData);

  return (
    <section id="portfolio" className="py-10 px-4 text-white">
      <div className="container mx-auto">
        <h3 class="section-heading">Recent Work</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ut
          fugiat dolores autem nihil pariatur quam iure necessitatibus mollitia
          quae, non laudantium consequuntur, libero magnam! Natus ullam ipsa
          illum corrupti?
        </p>
        <div className="portfolio-container">
          <ProjectsCategories />
          <Projects projects={projects} />
        </div>
        {/* {PortfolioData.map((portfolio) => {
          return (
            <Card>
              <img src={portfolio.image} alt={portfolio.title} />
            </Card>
          );
        })} */}
      </div>
    </section>
  );
};

export default Portfolio;
