import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items = signal<CartItem[]>([]);
  readonly cartItems = this.items.asReadonly();

  readonly total = signal(0);

  add(product: Product, quantity = 1) {
    const current = this.items();
    const existing = current.find(i => i.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
      this.items.set([...current]);
    } else {
      this.items.set([...current, { product, quantity }]);
    }
    this.updateTotal();
  }

  remove(productId: number) {
    this.items.set(this.items().filter(i => i.product.id !== productId));
    this.updateTotal();
  }

  updateQuantity(productId: number, quantity: number) {
    const current = this.items();
    const item = current.find(i => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.remove(productId);
        return;
      }
      this.items.set([...current]);
      this.updateTotal();
    }
  }

  clear() {
    this.items.set([]);
    this.total.set(0);
  }

  private updateTotal() {
    const sum = this.items().reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    this.total.set(Number(sum.toFixed(2)));
  }
}
