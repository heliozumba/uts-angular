import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderMobileComponent } from './shared/header-mobile/header-mobile.component';
import { HeaderDesktopComponent } from './shared/header-desktop/header-desktop.component';
import { PanelComponent } from './shared/panel/panel.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderMobileComponent,
    HeaderDesktopComponent,
    PanelComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
