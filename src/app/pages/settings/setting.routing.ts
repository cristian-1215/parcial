import { NgModule } from "@angular/core";
import {Routes,RouterModule, Router} from "@angular/router";
import { ThemeComponent } from '../../theme/theme.component';
import {CategoriesComponent} from './categories/categories.component';
import {AuthorsComponent} from './authors/authors.component';
import {AreasComponent} from './areas/areas.component';
import {SectionsComponent} from './sections/sections.component';
import {BooksComponent} from './books/books.component';


export const routes: Routes=[

    { path  : 'pages/categories', component : CategoriesComponent },
    { path  : 'pages/authors', component : AuthorsComponent },
    { path  : 'pages/areas', component : AreasComponent },
    { path  : 'pages/sections', component : SectionsComponent },
    { path  : 'pages/books', component : BooksComponent },
    {
        path: 'pages',
        component: ThemeComponent,
        children: [
            {
                path: '',
                loadChildren:'../dashboard/dashboard.module#DashboardModule'
            }
        ]
    
    }
    ]

@NgModule({
imports:[ RouterModule.forRoot(routes,{useHash:true})
],
exports:[RouterModule],
providers:[]
}) 
export class SetRoutingModule {}
