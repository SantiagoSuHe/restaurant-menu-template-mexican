import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Dish } from '../types/menu';
import { SpicyLevelIndicator } from './SpicyLevelIndicator';
import { useLanguage } from '../hooks/useLanguage';

interface DishCardProps {
  dish: Dish;
}

export const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const { t, menu } = useLanguage();
  const translation = menu[dish.id as keyof typeof menu];

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img
          src={dish.imageUrl}
          alt={translation.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{translation.name}</h3>
          <span className="text-lg font-semibold text-green-600">
            ${dish.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 mb-3">{translation.description}</p>
        <div className="flex flex-col gap-2">
          {dish.spicyLevel !== undefined && dish.spicyLevel > 0 && (
            <SpicyLevelIndicator level={dish.spicyLevel} />
          )}
          {dish.allergens && dish.allergens.length > 0 && (
            <div className="flex gap-1 items-center">
              <AlertTriangle size={16} className="text-amber-500" />
              <span className="text-xs text-amber-600">
                {t.allergens.contains}: {dish.allergens.join(', ')}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};