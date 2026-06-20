export interface ProductVariant {
  name: string;
  image: string;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  isNew?: boolean;
  variants?: ProductVariant[];
}

export type ProductCategory =
  | 'Skin'
  | 'Primers'
  | 'Bases'
  | 'Correctores'
  | 'Polvos'
  | 'Rubores'
  | 'Contorno'
  | 'Iluminador'
  | 'Sombras'
  | 'Delineadores'
  | 'Diamantinas'
  | 'Pestañas'
  | 'Labios'
  | 'Setting Spray'
  | 'Herramientas'
  | 'Brochas'
  | 'Hair'
  | 'Todos';
