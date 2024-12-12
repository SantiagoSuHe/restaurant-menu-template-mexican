import React from 'react';
import { Flame } from 'lucide-react';
import { SpicyLevel } from '../types/menu';

interface SpicyLevelIndicatorProps {
  level: SpicyLevel;
}

export const SpicyLevelIndicator: React.FC<SpicyLevelIndicatorProps> = ({ level }) => {
  if (level === 0) return null;

  const spicyLabels: Record<SpicyLevel, string> = {
    0: 'Not Spicy',
    1: 'Mild',
    2: 'Medium',
    3: 'Hot',
  };

  return (
    <div className="flex items-center gap-1" title={`Spicy Level: ${spicyLabels[level]}`}>
      {Array.from({ length: level }).map((_, index) => (
        <Flame
          key={index}
          size={16}
          className="text-red-500"
          fill={index < level ? 'currentColor' : 'none'}
        />
      ))}
      <span className="text-xs text-red-500 ml-1">{spicyLabels[level]}</span>
    </div>
  );
};