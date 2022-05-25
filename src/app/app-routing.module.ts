import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FindFreelancerComponent } from './find-freelancer/find-freelancer.component';
import { FindMissionComponent } from './find-mission/find-mission.component';
import { HomeComponent } from './home/home.component';
import { MissionbycategoryComponent } from './missionbycategory/missionbycategory.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'',component:HomeComponent} ,
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent} ,
  {path:'service' , component:ServiceComponent} ,
  {path:'missionbycategoryhome/:id' , component:MissionbycategoryComponent } ,
  {path:'freelancers' , component:FindFreelancerComponent},
  {path:'missions' , component:FindMissionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
