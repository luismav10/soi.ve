import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CartService, CartItem } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  imports: [RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-16px)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in', style({ opacity: 0, transform: 'translateX(16px)' }))
      ])
    ])
  ]
})
export class CartPageComponent {
  constructor(readonly cartService: CartService) {}

  increase(item: CartItem) {
    this.cartService.updateQuantity(item.product.id, item.quantity + 1);
  }

  decrease(item: CartItem) {
    this.cartService.updateQuantity(item.product.id, item.quantity - 1);
  }

  remove(productId: number) {
    this.cartService.remove(productId);
  }
}
