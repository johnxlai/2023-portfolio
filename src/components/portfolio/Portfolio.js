import React from 'react';
import Card from '../card/Card';
import PortfolioData from './portfolioData';
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-10 px-4">
      <div className="container mx-auto flex gap-10">
        <h3 class="section-heading">Portfolio</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ut
          fugiat dolores autem nihil pariatur quam iure necessitatibus mollitia
          quae, non laudantium consequuntur, libero magnam! Natus ullam ipsa
          illum corrupti?
        </p>
        {PortfolioData.map((portfolio) => {
          return (
            <Card>
              <img src={portfolio.image} alt={portfolio.title} />
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
