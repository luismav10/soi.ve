import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FavoritesService } from '../../services/favorites.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites-page',
  imports: [ProductCardComponent, RouterLink],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
  animations: [
    trigger('flyIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class FavoritesPageComponent {
  constructor(
    readonly favoritesService: FavoritesService,
    private cartService: CartService
  ) {}

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
