import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DashboardsettingComponent } from './core/components/dashboardsetting/dashboardsetting.component';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardsettingComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
