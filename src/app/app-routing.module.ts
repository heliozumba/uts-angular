import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'registro',
    component: RegisterComponent,
    data: {
      title: 'Registro'
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
