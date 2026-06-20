import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCategory } from '../../models/product.model';

@Component({
  selector: 'app-search-filter',
  imports: [FormsModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss'
})
export class SearchFilterComponent {
  readonly categories: ProductCategory[] = [
    'Todos', 'Skin', 'Primers', 'Bases', 'Correctores', 'Polvos',
    'Rubores', 'Contorno', 'Iluminador', 'Sombras', 'Delineadores',
    'Diamantinas', 'Pestañas', 'Labios', 'Setting Spray',
    'Herramientas', 'Brochas', 'Hair'
  ];
  searchTerm = signal('');
  selectedCategory = signal<ProductCategory>('Todos');

  searchChange = output<string>();
  categoryChange = output<ProductCategory>();

  onSearch(value: string) {
    this.searchTerm.set(value);
    this.searchChange.emit(value);
  }

  onCategory(cat: ProductCategory) {
    this.selectedCategory.set(cat);
    this.categoryChange.emit(cat);
  }
}
