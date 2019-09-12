import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SetRoutingModule } from './pages/settings/setting.routing'
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';
import { UsersComponent } from './pages/administration/users/users.component';
import { RolesComponent } from './pages/administration/roles/roles.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CategoriesComponent } from './pages/settings/categories/categories.component';
import { AuthorsComponent } from './pages/settings/authors/authors.component';
import { AreasComponent } from './pages/settings/areas/areas.component';
import { SectionsComponent } from './pages/settings/sections/sections.component';
import { BooksComponent } from './pages/settings/books/books.component'; 
import { SettingsModule } from './pages/settings/settings.module'
import { AdministrationModule } from './pages/administration/administration.module';
import { AdmRoutingModule } from './pages/administration/administration.routing';

@NgModule({
  declarations: [
    AppComponent,LoginComponent, ThemeComponent, UsersComponent, RolesComponent, AdministrationComponent, SettingsComponent, CategoriesComponent, AuthorsComponent, AreasComponent, SectionsComponent, BooksComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, SetRoutingModule, SettingsModule, AdmRoutingModule,AdministrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
