import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    FavoritesComponent,
    PetCardComponent,
    ProfileComponent
  ],
  entryComponents: [ ProfileComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    LayoutModule,
    MaterialModule,
    MatDialogModule,
    HttpClientJsonpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SearchService, 
    ProfileService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
