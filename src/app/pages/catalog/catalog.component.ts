import { Component, signal, computed } from '@angular/core';
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
  styleUrl: './catalog.component.scss'
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
