import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { ActiveMissionsFreelancerComponent } from './freelancer/active-missions-freelancer/active-missions-freelancer.component';
import { DashboardFreelancerComponent } from './freelancer/dashboard-freelancer/dashboard-freelancer.component';
import { EducationComponent } from './freelancer/education/education.component';
import { EndedMissionsFreelancerComponent } from './freelancer/ended-missions-freelancer/ended-missions-freelancer.component';
import { ExperienceComponent } from './freelancer/experience/experience.component';
import { FavorisComponent } from './freelancer/favoris/favoris.component';
import { GeneratecvComponent } from './freelancer/generatecv/generatecv.component';
import { PostulatedMissionFreelancerComponent } from './freelancer/postulated-mission-freelancer/postulated-mission-freelancer.component';
import { ProfilFreelancerComponent } from './freelancer/profil-freelancer/profil-freelancer.component';
import { SkillsComponent } from './freelancer/skills/skills.component';
import { AuthGuard } from './services/auth.guard';
import { AboutComponent } from './user/about/about.component';
import { ContactComponent } from './user/contact/contact.component';
import { DetailClientComponent } from './user/detail-client/detail-client.component';
import { DetailFreelancerComponent } from './user/detail-freelancer/detail-freelancer.component';
import { DetailMissionComponent } from './user/detail-mission/detail-mission.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { FreelancerComponent } from './user/freelancer/freelancer.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { MissionComponent } from './user/mission/mission.component';
import { RegisterComponent } from './user/register/register.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail-client/:id', component: DetailClientComponent },
  { path: 'detail-freelancer/:id', component: DetailFreelancerComponent },
  { path: 'detail-mission/:id', component: DetailMissionComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset/:token', component: ResetPasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'freelancer', component: FreelancerComponent },
  { path: 'contact', component: ContactComponent },

  /*********************************** admin *************************************/
  { path: 'dashboard-admin', canActivate: [AuthGuard], component: DashboardAdminComponent },
  { path: 'categories', canActivate: [AuthGuard], component: CategoriesComponent },
  { path: 'addcategory', canActivate: [AuthGuard], component: AddCategoryComponent },


  /*********************************** freelancer *************************************/
  { path: 'dashboard-freelancer', canActivate: [AuthGuard], component: DashboardFreelancerComponent },
  { path: 'postulated-missions-freelancer', canActivate: [AuthGuard], component: PostulatedMissionFreelancerComponent },
  { path: "generatecv/:id", canActivate: [AuthGuard], component: GeneratecvComponent },
  { path: 'favoris', canActivate: [AuthGuard], component: FavorisComponent },
  { path: 'active-missions-freelancer', canActivate: [AuthGuard], component: ActiveMissionsFreelancerComponent },
  { path: 'ended-missions-freelancer', canActivate: [AuthGuard], component: EndedMissionsFreelancerComponent },
  { path: 'profil-freelancer', canActivate: [AuthGuard], component: ProfilFreelancerComponent },
  { path: 'education', canActivate: [AuthGuard], component: EducationComponent },
  { path:'experience', canActivate:[AuthGuard] ,component:ExperienceComponent},
  { path:'skills', canActivate:[AuthGuard]  , component:SkillsComponent},
  

  /*********************************** client *************************************/



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
