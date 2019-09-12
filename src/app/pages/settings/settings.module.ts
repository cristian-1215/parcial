import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SetRoutingModule } from './setting.routing';

// import { CategoriesComponent } from './categories/categories.component';
// import { AuthorsComponent } from './authors/authors.component';
// import { AreasComponent } from './areas/areas.component';
// import { SectionsComponent } from './sections/sections.component';
// import { BooksComponent } from './books/books.component';

@NgModule({
  imports: [
    BrowserModule,CommonModule,SetRoutingModule
  ],
  declarations: [
  ]
})
export class SettingsModule { }
