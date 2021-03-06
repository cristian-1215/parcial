import { NgModule } from "@angular/core";
import {Routes,RouterModule, Router} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';
import {UsersComponent } from './pages/administration/users/users.component'
import {RolesComponent}  from './pages/administration/roles/roles.component'



export const routes: Routes=[
    { path  : 'login', component : LoginComponent },
    {
    path: 'pages',
    component: ThemeComponent,
    children: [
        {
            path: '',
            loadChildren:'./pages/dashboard/dashboard.module#DashboardModule'
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
export class AppRoutingModule {}
