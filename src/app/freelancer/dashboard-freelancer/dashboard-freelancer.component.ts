import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-freelancer',
  templateUrl: './dashboard-freelancer.component.html',
  styleUrls: ['./dashboard-freelancer.component.css']
})
export class DashboardFreelancerComponent implements OnInit {

  freelancerdata:any;
  
  constructor() { 
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
    console.log(this.freelancerdata)
  }
  ngOnInit(): void {
  }

}
