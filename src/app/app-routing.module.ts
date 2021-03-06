import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'favorites', component: FavoritesComponent },
  { path: 'search', component: SearchComponent },
  // { path: 'profile/:id', component: ProfileComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
