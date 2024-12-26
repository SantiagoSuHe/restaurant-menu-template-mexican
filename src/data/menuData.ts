import { Dish } from '../types/menu';

export const menuItems: Dish[] = [
  {
    id: 'guacamole-fresco',
    name: 'Guacamole Fresco',
    description:
      'Fresh avocados mixed with lime, cilantro, onions, and tomatoes, served with warm tortilla chips',
    category: 'appetizers',
    price: 12.99,
    imageUrl:
      'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&q=80&w=600',
    spicyLevel: 1,
  },
  {
    id: 'sopa-tortilla',
    name: 'Sopa de Tortilla',
    description:
      'Traditional Mexican soup with crispy tortilla strips, avocado, and cheese',
    category: 'soups',
    price: 9.99,
    imageUrl:
      'https://images.unsplash.com/photo-1562059390-a761a084768e?auto=format&fit=crop&q=80&w=600',
    spicyLevel: 1,
  },
  {
    id: 'enchiladas-rojas',
    name: 'Enchiladas Rojas',
    description:
      'Three corn tortillas filled with chicken, topped with red chile sauce and melted cheese',
    category: 'main-courses',
    price: 18.99,
    imageUrl:
      'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&q=80&w=600',
    spicyLevel: 2,
  },
  {
    id: 'churros-chocolate',
    name: 'Churros con Chocolate',
    description:
      'Crispy cinnamon-sugar coated churros served with warm chocolate sauce',
    category: 'desserts',
    price: 8.99,
    imageUrl:
      'https://7diasdesabor.com/wp-content/uploads/2022/05/churros-con-salsa-de-chocolate.jpg',
    allergens: ['gluten'],
  },
  {
    id: 'margarita-clasica',
    name: 'Margarita Clásica',
    description:
      'Classic lime margarita with premium tequila and fresh-squeezed lime juice',
    category: 'drinks',
    price: 11.99,
    imageUrl:
      'https://images.unsplash.com/photo-1631503190221-0f6a15367926?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'camarones-diabla',
    name: 'Camarones a la Diabla',
    description:
      'Shrimp in an extra spicy red chile sauce, served with rice and lime',
    category: 'main-courses',
    price: 22.99,
    imageUrl:
      'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?auto=format&fit=crop&q=80&w=600',
    spicyLevel: 3,
    allergens: ['shellfish'],
  },
];