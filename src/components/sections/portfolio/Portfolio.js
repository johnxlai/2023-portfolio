import React from 'react';
import Card from '../../card/Card';
import PortfolioData from './portfolioData';
import Projects from './Projects';
import ProjectsCategories from './ProjectsCategories';
import { useState } from 'react';
const Portfolio = () => {
  const [projects, setProjects] = useState(PortfolioData);

  const categories = PortfolioData.map((item) => item.category);
  const uniqueCategories = ['All', ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if (category === 'All') {
      //set project to all projects by default
      setProjects(PortfolioData);
      return;
    }
    const filterProjects = PortfolioData.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section
      id="portfolio"
      className="angled-accent pt-16 py-[14rem] px-4 text-white bg-secondary">
      <div className="container mx-auto text-center relative z-[1]">
        <h3 className="section-heading mb-4">Recent Work</h3>
        <p className="mb-10 w-1/2 mx-auto text-gray-300">
          Take a look at some of the projects I've recently completed for my
          clients.
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
