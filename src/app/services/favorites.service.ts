import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private items = signal<Product[]>([]);
  readonly favorites = this.items.asReadonly();

  toggle(product: Product) {
    const current = this.items();
    const exists = current.find(p => p.id === product.id);
    if (exists) {
      this.items.set(current.filter(p => p.id !== product.id));
    } else {
      this.items.set([...current, product]);
    }
  }

  isFavorite(productId: number): boolean {
    return this.items().some(p => p.id === productId);
  }

  remove(productId: number) {
    this.items.set(this.items().filter(p => p.id !== productId));
  }
}
