import { Component, signal, computed } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { FavoritesService } from '../../services/favorites.service';
import { Product, ProductCategory } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { SearchFilterComponent } from '../../components/search-filter/search-filter.component';

@Component({
  selector: 'app-catalog',
  imports: [ProductCardComponent, SearchFilterComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  animations: [
    trigger('flyIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(24px) scale(0.97)' }),
        animate('0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in', style({ opacity: 0, transform: 'translateY(-12px) scale(0.97)' }))
      ])
    ])
  ]
})
export class CatalogComponent {
  private searchTerm = signal('');
  private activeCategory = signal<ProductCategory>('Todos');

  filteredProducts = computed(() => {
    let products = this.productService.getProducts();
    const cat = this.activeCategory();
    if (cat !== 'Todos') {
      products = products.filter(p => p.category === cat);
    }
    const q = this.searchTerm().toLowerCase();
    if (q) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }
    return products;
  });

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private favoritesService: FavoritesService
  ) {}

  onSearch(value: string) {
    this.searchTerm.set(value);
  }

  onCategory(cat: ProductCategory) {
    this.activeCategory.set(cat);
  }

  addToCart(product: Product) {
    this.cartService.add(product);
  }

  toggleFavorite(product: Product) {
    this.favoritesService.toggle(product);
  }

  isFavorite(id: number) {
    return this.favoritesService.isFavorite(id);
  }

  inCart(id: number) {
    return this.cartService.cartItems().some(i => i.product.id === id);
  }
}
