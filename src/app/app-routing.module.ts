import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { StatisticsComponent } from './views/dashboard/statistics/statistics.component'
import { StudentListComponent } from './views/dashboard/student-list/student-list.component'

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
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  } /* ,
  {
    /* path: 'estudantes',
    component: StudentListComponent,
    data: {
      title: 'Lista de Estudantes'
    } 
  } */
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
