import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { SidebarComponent } from './shared/sidebar/sidebar.component'
import { HeaderMobileComponent } from './shared/header-mobile/header-mobile.component'
import { HeaderDesktopComponent } from './shared/header-desktop/header-desktop.component'
import { PanelComponent } from './shared/panel/panel.component'
import { StudentListComponent } from './views/dashboard/student-list/student-list.component'
import { StatisticsComponent } from './views/dashboard/statistics/statistics.component'
import { StudentRegisterComponent } from './views/dashboard/student-register/student-register.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderMobileComponent,
    HeaderDesktopComponent,
    PanelComponent,
    StudentListComponent,
    StatisticsComponent,
    StudentRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
