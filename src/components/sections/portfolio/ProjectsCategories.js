import { useState } from 'react';
import CategoryButton from './CategoryButton';

const ProjectsCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  //Add active to cta btn
  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  };

  return (
    <div className="portfolio-categories justify-center flex gap-3 mb-12">
      {categories.map((category) => {
        return (
          <CategoryButton
            key={category}
            category={category}
            onChangeCategory={() => changeCategoryHandler(category)}
            className={`uppercase font-bold ${
              activeCategory === category
                ? 'btn-primary'
                : 'btn-primary btn-active'
            }`}
          />
        );
      })}
    </div>
  );
};

export default ProjectsCategories;
