import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeKitchenComponent } from './component/home-kitchen/home-kitchen.component';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { HealthFitnessComponent } from './component/health-fitness/health-fitness.component';
import { ComputersComponent } from './component/computers/computers.component';
import { HeaderComponent } from './component/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './component/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeKitchenComponent,
    ElectronicsComponent,
    HealthFitnessComponent,
    ComputersComponent,
    HeaderComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
