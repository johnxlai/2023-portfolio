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
    <div className="portfolio-categories flex gap-3">
      {categories.map((category) => {
        return (
          <CategoryButton
            key={category}
            category={category}
            onChangeCategory={() => changeCategoryHandler(category)}
            className={`uppercase font-bold ${
              activeCategory === category ? 'btn-primary' : 'bg-green-200'
            }`}
          />
        );
      })}
    </div>
  );
};

export default ProjectsCategories;
