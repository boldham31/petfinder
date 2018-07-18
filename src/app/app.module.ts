import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MaterialModule } from './modules/material.module';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { SearchService } from './search/services/search.service';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/services/profile.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    FavoritesComponent,
    PetCardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MaterialModule,
    HttpClientJsonpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SearchService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
