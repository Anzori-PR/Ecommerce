import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeKitchenComponent } from './component/home-kitchen/home-kitchen.component';
import { ComputersComponent } from './component/computers/computers.component';
import { HealthFitnessComponent } from './component/health-fitness/health-fitness.component';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { DetailsComponent } from './component/details/details.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo : 'Home', pathMatch : 'full'},
  {path: 'Home', component : DashboardComponent},
  {path: 'Home/Home&Kitchen', component : HomeKitchenComponent},
  {path: 'Home/Computers', component : ComputersComponent},
  {path: 'Home/Health&Fitness', component : HealthFitnessComponent},
  {path: 'Home/Electronics', component : ElectronicsComponent},
  {path: 'Home/Cart', component : CartComponent},
  {path: 'Home/details/:id', component : DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
