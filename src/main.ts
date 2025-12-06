import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {provideRouter, Routes} from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';



const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }, //Default route
     //eagerly loaded

  {
    path: 'homepage',
    loadComponent: () =>
      import('./app/homepage/homepage').then(m => m.Homepage)
  }

  ,


  {
    path:'about-me',
    loadComponent: () =>
      import('./app/about-me/about-me').then(m => m.AboutMe) }, //Lazy Loaded


  { path: 'projects',
    loadComponent: () =>
      import('./app/projects/projects').then(m => m.Projects) },


  { path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found').then(m => m.PageNotFound) },
];
// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(App, {
  providers: [provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
