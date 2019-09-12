import { NgModule } from "@angular/core";
import {Routes,RouterModule, Router} from "@angular/router";
import { ThemeComponent } from '../../theme/theme.component';
import {RolesComponent} from './roles/roles.component';
import {UsersComponent} from './users/users.component';



export const routes: Routes=[

    { path  : 'pages/roles', component : RolesComponent },
    { path  : 'pages/users', component : UsersComponent },
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
export class AdmRoutingModule {}
