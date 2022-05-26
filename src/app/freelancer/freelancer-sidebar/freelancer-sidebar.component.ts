import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-freelancer-sidebar',
  templateUrl: './freelancer-sidebar.component.html',
  styleUrls: ['./freelancer-sidebar.component.css']
})
export class FreelancerSidebarComponent implements OnInit {

  freelancerdata:any;
  constructor(public UsersService:UsersService, public router:Router) { }

  ngOnInit(): void {
    this.freelancerdata = JSON.parse(localStorage.getItem('freelancerdata') ||'{}');
    console.log(this.freelancerdata.id)
  
  }

  logout(){
  
    this.UsersService.logout();
    this.router.navigate(['/login']);
   
  }
}