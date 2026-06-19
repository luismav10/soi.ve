import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/catalog/catalog.component').then(m => m.CatalogComponent) },
  { path: 'cart', loadComponent: () => import('./pages/cart-page/cart-page.component').then(m => m.CartPageComponent) },
  { path: 'favorites', loadComponent: () => import('./pages/favorites-page/favorites-page.component').then(m => m.FavoritesPageComponent) },
  { path: '**', redirectTo: '' },
];
