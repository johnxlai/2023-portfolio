import React from 'react';
import Card from '../../card/Card';
import PortfolioData from './portfolioData';
import Projects from './Projects';
import ProjectsCategories from './ProjectsCategories';
import { useState } from 'react';
const Portfolio = () => {
  const [projects, setProjects] = useState(PortfolioData);

  const categories = PortfolioData.map((item) => item.category);
  const uniqueCategories = ['all', ...new Set(categories)];
  console.log(uniqueCategories);

  const filterProjectsHandler = (category) => {
    if (category === 'all') {
      setProjects(PortfolioData);
      return;
    }
    const filterProjects = PortfolioData.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section id="portfolio" className="py-10 px-4 text-white">
      <div className="container mx-auto">
        <h3 className="section-heading">Recent Work</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ut
          fugiat dolores autem nihil pariatur quam iure necessitatibus mollitia
          quae, non laudantium consequuntur, libero magnam! Natus ullam ipsa
          illum corrupti?
        </p>
        <div className="portfolio-container">
          <ProjectsCategories
            categories={uniqueCategories}
            onFilterProjects={filterProjectsHandler}
          />
          <Projects projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
