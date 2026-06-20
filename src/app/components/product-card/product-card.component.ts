import { Component, input, output, signal, viewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  animations: [
    trigger('fadeSlide', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(-6px)' }),
        animate('0.25s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProductCardComponent {
  product = input.required<Product>();
  isFavorite = input(false);
  inCart = input(false);

  addToCart = output<Product>();
  toggleFavorite = output<Product>();

  selectedVariant = signal(0);
  trackRef = viewChild<ElementRef<HTMLElement>>('track');

  currentImage() {
    const p = this.product();
    const idx = this.selectedVariant();
    if (p.variants?.length && p.variants[idx]) {
      return p.variants[idx].image;
    }
    return p.image;
  }

  currentName() {
    const p = this.product();
    const idx = this.selectedVariant();
    if (p.variants?.length && p.variants[idx]) {
      return `${p.name} | ${p.variants[idx].name}`;
    }
    return p.name;
  }

  onScroll() {
    const el = this.trackRef();
    if (!el) return;
    const idx = Math.round(el.nativeElement.scrollLeft / el.nativeElement.clientWidth);
    this.selectedVariant.set(idx);
  }

  slide(dir: number) {
    const el = this.trackRef();
    if (!el) return;
    const i = this.selectedVariant() + dir;
    const max = (this.product().variants?.length ?? 1) - 1;
    if (i < 0 || i > max) return;
    el.nativeElement.scrollTo({ left: i * el.nativeElement.clientWidth, behavior: 'smooth' });
    this.selectedVariant.set(i);
  }
}
