import { useState } from 'react';
import CategoryButton from './CategoryButton';

const ProjectsCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  //Add active to cta btn
  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  };

  return (
    <div className="portfolio-categories justify-center flex gap-3 md:gap-4 mb-12">
      {categories.map((category) => {
        return (
          <CategoryButton
            key={category}
            category={category}
            onChangeCategory={() => changeCategoryHandler(category)}
            className={`md:uppercase btn-primary py-1 px-2 md:px-4 text-sm ${
              activeCategory === category ? 'btn-active' : ' '
            }`}
          />
        );
      })}
    </div>
  );
};

export default ProjectsCategories;
