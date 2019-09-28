import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SystemOperatorComponent } from './system-operator/system-operator.component';
import { AdminComponent } from './admin/admin.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { CentralManagerComponent } from './central-manager/central-manager.component';
import { AuditorComponent } from './auditor/auditor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SystemOperatorComponent,
    AdminComponent,
    SupervisorComponent,
    CentralManagerComponent,
    AuditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
