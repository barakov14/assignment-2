import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'catalog',
    loadComponent: () =>
      import('./pages/catalog/catalog-container/catalog-container.component')
        .then((c) => c.CatalogContainerComponent)
  }
];
