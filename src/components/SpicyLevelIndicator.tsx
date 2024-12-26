import React from 'react';
import { Flame } from 'lucide-react';
import { SpicyLevel } from '../types/menu';
import { useLanguage } from '../hooks/useLanguage';

interface SpicyLevelIndicatorProps {
  level: SpicyLevel;
}

export const SpicyLevelIndicator: React.FC<SpicyLevelIndicatorProps> = ({ level }) => {
  const { t } = useLanguage();
  if (level === 0) return null;

  const spicyLabelKeys: Record<SpicyLevel, keyof typeof t.spicyLevels> = {
    0: 'notSpicy',
    1: 'mild',
    2: 'medium',
    3: 'hot',
  };

  return (
    <div className="flex items-center gap-1" title={t.spicyLevels[spicyLabelKeys[level]]}>
      {Array.from({ length: level }).map((_, index) => (
        <Flame
          key={index}
          size={16}
          className="text-red-500"
          fill={index < level ? 'currentColor' : 'none'}
        />
      ))}
      <span className="text-xs text-red-500 ml-1">
        {t.spicyLevels[spicyLabelKeys[level]]}
      </span>
    </div>
  );
};