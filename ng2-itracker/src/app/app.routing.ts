import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'pages/overview', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/overview' },
  { path: 'main', redirectTo: 'pages/overview'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
