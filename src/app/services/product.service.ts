import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    // Skin
    { id: 1, name: 'AOA Makeup Remover Wipes', description: 'Desmaquillante bifásico suave', price: 4.00, image: 'assets/images/skin/AOA-makeup-remover.jpg', category: 'Skin' },
    { id: 2, name: 'AOA Skin Salicylic Acid + Tea', description: 'Tratamiento con ácido salicílico', price: 5.00, image: 'assets/images/skin/AOA-skin-salicylic.jpg', category: 'Skin' },
    { id: 3, name: 'Neutrogena Sunscreen SPF70', description: 'Protector solar SPF 50+', price: 18.00, image: 'assets/images/skin/neutrogena-sunscreen.jpg', category: 'Skin', isNew: true },
    { id: 4, name: 'Parches Hidrocoloides para Acné', description: 'Parches para imperfecciones', price: 7.90, image: 'assets/images/skin/parches-hidrocoloides.PNG', category: 'Skin' },
    { id: 5, name: 'The Ordinary Niacinamide Serum 10% + Zinc 1%', description: 'Preparador de piel con niacinamida', price: 14.00, image: 'assets/images/skin/ordinary-niacinamide.jpg', category: 'Skin', isNew: true },

    // Primers
    { id: 6, name: 'ELF Poreless Putty Primer', description: 'Primer matificante sin poros', price: 14.00, image: 'assets/images/primers/elf-poreless-putty-primer.jpeg', category: 'Primers', isNew: true },

    // Bases
    { id: 7, name: 'AOA Matte Vision Hi-Def', description: 'Base matte de alta definición', price: 5.00, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=AOA+Base', category: 'Bases', isNew: true,
      variants: [
        { name: 'L2', image: 'assets/images/bases/AOA-matte-vision-hi-def-L2.jpg', color: '#F5DEB3' },
        { name: 'L3', image: 'assets/images/bases/AOA-matte-vision-hi-def-L3.jpg', color: '#DEB887' },
        { name: 'M3', image: 'assets/images/bases/AOA-matte-vision-hi-def-M3.jpg', color: '#C4A882' },
      ]
    },
    { id: 8, name: 'Wet n Wild Foundation', description: 'Base cobertura modulable', price: 12.00, image: 'https://placehold.co/300x400/643843/FFFFFF?text=WnW+Base', category: 'Bases',
      variants: [
        { name: 'Porcelain', image: 'assets/images/bases/wet-n-wild-foundation-porcelain.PNG', color: '#FAEBD7' },
        { name: 'Cream Beige', image: 'assets/images/bases/wet-n-wild-foundation-cream-beige.jpeg', color: '#F5E6CC' },
        { name: 'Soft Beige', image: 'assets/images/bases/wet-n-wild-foundation-soft-beige.jpeg', color: '#E8D5B7' },
        { name: 'Desert Beige', image: 'assets/images/bases/wet-n-wild-foundation-desert-beige.PNG', color: '#C4A265' },
      ]
    },

    // Correctores
    { id: 9, name: 'Corrector Líquido', description: 'Corrector alta cobertura', price: 12.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Corrector', category: 'Correctores' },
    { id: 10, name: 'Paleta Correctora', description: 'Paleta 6 colores para colorimetría', price: 24.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Paleta+Correct', category: 'Correctores', isNew: true },

    // Polvos
    { id: 11, name: 'Polvo Compacto', description: 'Polvo compacto matificante', price: 15.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Polvo+Compacto', category: 'Polvos' },
    { id: 12, name: 'Polvo Translúcido', description: 'Polvo suelto sellador', price: 18.50, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Polvo+Suelto', category: 'Polvos', isNew: true },

    // Rubores
    { id: 13, name: 'Rubor en Crema', description: 'Rubor cremoso de larga duración', price: 13.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Rubor+Crema', category: 'Rubores' },
    { id: 14, name: 'Rubor en Polvo', description: 'Rubor pigmentado efecto natural', price: 11.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Rubor+Polvo', category: 'Rubores', isNew: true },

    // Contorno
    { id: 15, name: 'Bronzer en Polvo', description: 'Polvo bronceador efecto sol', price: 16.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Bronzer+Polvo', category: 'Contorno' },
    { id: 16, name: 'Contour Stick', description: 'Contorno en barra difuminable', price: 14.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Contour+Stick', category: 'Contorno', isNew: true },

    // Iluminador
    { id: 17, name: 'Iluminador en Polvo', description: 'Polvo iluminador tono champagne', price: 17.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Iluminador+Polvo', category: 'Iluminador', isNew: true },
    { id: 18, name: 'Iluminador Líquido', description: 'Iluminador líquido efecto glass skin', price: 15.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Iluminador+Liq', category: 'Iluminador' },

    // Sombras
    { id: 19, name: 'Paleta de Sombras', description: 'Paleta 18 sombras neutras', price: 32.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Paleta+Sombras', category: 'Sombras', isNew: true },
    { id: 20, name: 'Sombra Individual', description: 'Sombra individual tono metalizado', price: 8.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Sombra+Indiv', category: 'Sombras' },

    // Delineadores
    { id: 21, name: 'Delineador Gel', description: 'Delineador en gel larga duración', price: 11.50, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Delineador+Gel', category: 'Delineadores', isNew: true },
    { id: 22, name: 'Delineador Líquido', description: 'Delineador negro waterproof', price: 9.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Delineador+Liq', category: 'Delineadores' },

    // Diamantinas
    { id: 23, name: 'Diamantina en Crema', description: 'Glitter en crema efecto mojado', price: 10.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Diamantina+Crema', category: 'Diamantinas', isNew: true },
    { id: 24, name: 'Glitter Suelto', description: 'Glitter holográfico multiuso', price: 7.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Glitter+Suelto', category: 'Diamantinas' },

    // Pestañas
    { id: 25, name: 'Pestañas Dramáticas', description: 'Pestañas efecto mariposa', price: 11.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Pestanas+Drama', category: 'Pestañas' },
    { id: 26, name: 'Pestañas Postizas', description: 'Pestañas volumen natural', price: 8.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Pestanas+Natural', category: 'Pestañas', isNew: true },

    // Labios
    { id: 27, name: 'Brillo Labial', description: 'Brillo hidratante con vitamina E', price: 9.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Brillo+Labial', category: 'Labios' },
    { id: 28, name: 'Labial Mate', description: 'Labial de larga duración con acabado mate', price: 12.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Labial+Mate', category: 'Labios', isNew: true },

    // Setting Spray
    { id: 29, name: 'Setting Spray Glow', description: 'Fijador con acabado luminoso', price: 14.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Setting+Glow', category: 'Setting Spray' },
    { id: 30, name: 'Setting Spray Matte', description: 'Fijador de maquillaje efecto mate', price: 14.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Setting+Matte', category: 'Setting Spray', isNew: true },

    // Herramientas
    { id: 31, name: 'Sacapuntas', description: 'Sacapuntas doble profesional', price: 4.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Sacapuntas', category: 'Herramientas', isNew: true },
    { id: 32, name: 'Set de Esponjas', description: 'Set 3 esponjas de maquillaje', price: 9.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Set+Esponjas', category: 'Herramientas' },

    // Brochas
    { id: 33, name: 'Brocha Base', description: 'Brocha duofibra para base', price: 12.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Brocha+Base', category: 'Brochas' },
    { id: 34, name: 'Set de Brochas', description: 'Set 6 brochas profesionales', price: 29.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Set+Brochas', category: 'Brochas', isNew: true },

    // Hair
    { id: 35, name: 'Cepillo Alisador', description: 'Cepillo térmico alisador', price: 24.90, image: 'https://placehold.co/300x400/99627A/FFFFFF?text=Cepillo+Alisador', category: 'Hair', isNew: true },
    { id: 36, name: 'Spray Texturizador', description: 'Spray texturizante efecto playa', price: 16.90, image: 'https://placehold.co/300x400/643843/FFFFFF?text=Texturizador', category: 'Hair' },
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
