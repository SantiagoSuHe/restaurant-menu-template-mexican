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
      'https://brandsitesplatform-res.cloudinary.com/image/fetch/w_auto:100,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_auto,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Foldelpaso%2Foldelpaso-us%2Frecipes%2Fufgsytw5keimh7nvghyetg_gmi_hi_res_jpeg.jpeg%3F',
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
      'https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/general/sopa-de-tortilla/main-header.jpg',
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
      'https://www.vvsupremo.com/wp-content/uploads/2016/02/900X570_Red-Enchiladas-Suizas.jpg',
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
      'https://peopleenespanol.com/thmb/f-W91ejdX_Zv1mir2ZP5TyW-pcc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/margarita-clasica-2000-43c81720c1504881a8082233ed66f02d.jpg',
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