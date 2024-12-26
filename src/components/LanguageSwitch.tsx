import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Languages } from 'lucide-react';

export const LanguageSwitch: React.FC = () => {
  const { lang = 'en' } = useParams<{ lang: string }>();
  const targetLang = lang === 'en' ? 'es' : 'en';

  return (
    <Link
      to={`/${targetLang}`}
      className="flex items-center gap-1 text-gray-600 hover:text-green-600 transition-colors"
      title={`Switch to ${targetLang === 'en' ? 'English' : 'Español'}`}
    >
      <Languages size={20} />
      <span className="text-sm font-medium uppercase">{lang}</span>
    </Link>
  );
};