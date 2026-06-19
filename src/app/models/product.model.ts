export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  isNew?: boolean;
}

export type ProductCategory =
  | 'Labios'
  | 'Ojos'
  | 'Rostro'
  | 'Uñas'
  | 'Cuidado'
  | 'Todos';
