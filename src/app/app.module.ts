import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FindFreelancerComponent } from './find-freelancer/find-freelancer.component';
import { FindMissionComponent } from './find-mission/find-mission.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DetailMissionComponent } from './detail-mission/detail-mission.component';
import { DetailFreelancerComponent } from './detail-freelancer/detail-freelancer.component';
import { MissionbycategoryComponent } from './missionbycategory/missionbycategory.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FindFreelancerComponent,
    FindMissionComponent,
    NavbarComponent,
    FooterComponent,
    DetailMissionComponent,
    DetailFreelancerComponent,
    MissionbycategoryComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule ,
    FormsModule , 
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
