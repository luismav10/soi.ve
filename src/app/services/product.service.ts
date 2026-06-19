import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Labial Mate', description: 'Labial de larga duración con acabado mate', price: 12.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Labial+Mate', category: 'Labios', isNew: true },
    { id: 2, name: 'Brillo Labial', description: 'Brillo hidratante con vitamina E', price: 9.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Brillo+Labial', category: 'Labios' },
    { id: 3, name: 'Delineador', description: 'Delineador de ojos waterproof', price: 7.50, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Delineador', category: 'Ojos' },
    { id: 4, name: 'Sombra Paleta', description: 'Paleta de 12 sombras pigmentadas', price: 24.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Sombra+Paleta', category: 'Ojos', isNew: true },
    { id: 5, name: 'Máscara Pestañas', description: 'Máscara volumen extremo', price: 15.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Mascara', category: 'Ojos' },
    { id: 6, name: 'Base Facial', description: 'Base cobertura media a full', price: 18.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Base+Facial', category: 'Rostro' },
    { id: 7, name: 'Polvo Compacto', description: 'Polvo matificante traslúcido', price: 14.50, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Polvo', category: 'Rostro', isNew: true },
    { id: 8, name: 'Rubor', description: 'Rubor en crema de larga duración', price: 11.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Rubor', category: 'Rostro' },
    { id: 9, name: 'Esmalte Rojo', description: 'Esmalte uñas rojo intenso', price: 5.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Esmalte+Rojo', category: 'Uñas' },
    { id: 10, name: 'Set Uñas', description: 'Set 6 colores básicos', price: 22.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Set+Uñas', category: 'Uñas', isNew: true },
    { id: 11, name: 'Crema Hidratante', description: 'Crema facial con ácido hialurónico', price: 20.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Crema', category: 'Cuidado' },
    { id: 12, name: 'Desmaquillante', description: 'Agua micelar bifásica', price: 10.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Desmaquillante', category: 'Cuidado' },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getByCategory(category: ProductCategory): Product[] {
    if (category === 'Todos') return this.products;
    return this.products.filter(p => p.category === category);
  }

  search(query: string): Product[] {
    const q = query.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  getById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
