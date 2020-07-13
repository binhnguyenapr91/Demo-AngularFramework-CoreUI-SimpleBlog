import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import {BlogComponent} from './views/blog/blog.component';
import {BlogListingComponent} from './views/blog-listing/blog-listing.component';
import {BlogFormComponent} from './views/blog-form/blog-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'blog-listing',
        component: BlogListingComponent
      },
      {
        path: 'blog-form',
        component: BlogFormComponent
      },

    ]
  },
  { path: '**', component: DefaultLayoutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
