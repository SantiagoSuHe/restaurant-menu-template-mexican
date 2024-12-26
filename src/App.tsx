import React, { useState } from 'react';
import { Utensils } from 'lucide-react';
import { DishCard } from './components/DishCard';
import { CategoryFilter } from './components/CategoryFilter';
import { LanguageSwitch } from './components/LanguageSwitch';
import { menuItems } from './data/menuData';
import { useLanguage } from './hooks/useLanguage';
import { DishCategory } from './types/menu';

function App() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<DishCategory | 'all'>('all');

  const filteredDishes = menuItems.filter(
    (dish) => selectedCategory === 'all' || dish.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Utensils className="h-8 w-8 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
            </div>
            <LanguageSwitch />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;