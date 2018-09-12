import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {CreateShowProjectComponent} from './create-show-project/create-show-project.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {PageNotFoundComponent} from './page-not-found.component'
import {LoginGuard} from './login-guard.service'

const appRoutes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'cspro', component: CreateShowProjectComponent,canActivate:[LoginGuard]},
    {path:'', redirectTo: '/login', pathMatch: 'full'},
    {path:'**', component: PageNotFoundComponent}
]

@NgModule(
    {
        imports: [
            RouterModule.forRoot(
                appRoutes,
                // {enableTracing: true}
            )
        ],
        exports: [
            RouterModule
          ]
    }
)

export class AppRoutingModule {}