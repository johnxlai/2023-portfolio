import React from 'react';
import CategoryButton from './CategoryButton';

const ProjectsCategories = ({ categories }) => {
  console.log(categories);
  return (
    <div className="portfolio-categories flex gap-3">
      {categories.map((category) => {
        return (
          <CategoryButton
            key={category}
            category={category}
            className={`btn-primary uppercase font-bold`}
          />
        );
      })}
    </div>
  );
};

export default ProjectsCategories;
