import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { ContactComponent } from './contact/contact.component';
import { FindFreelancerComponent } from './find-freelancer/find-freelancer.component';
import { FindMissionComponent } from './find-mission/find-mission.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MissionbycategoryComponent } from './missionbycategory/missionbycategory.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'',component:HomeComponent} ,
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent} ,
  {path:'service' , component:ServiceComponent} ,
  {path:'missionbycategoryhome/:id' , component:MissionbycategoryComponent } ,
  {path:'freelancers' , component:FindFreelancerComponent},
  {path:'missions' , component:FindMissionComponent},
  { path : 'register' , component:RegisterComponent } ,
  {path:'login' ,  component:LoginComponent } ,
  {path:'dashboard-admin'   , component:DashboardAdminComponent } ,



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
