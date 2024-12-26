import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { DishCategory } from '../types/menu';

interface CategoryFilterProps {
  selectedCategory: DishCategory | 'all';
  onCategoryChange: (category: DishCategory | 'all') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const { t } = useLanguage();
  const categories: (DishCategory | 'all')[] = [
    'all',
    'appetizers',
    'soups',
    'main-courses',
    'desserts',
    'drinks',
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              selectedCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {t.categories[category]}
        </button>
      ))}
    </div>
  );
};