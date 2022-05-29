import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-generatecontratfreelancer',
  templateUrl: './generatecontratfreelancer.component.html',
  styleUrls: ['./generatecontratfreelancer.component.css']
})
export class GeneratecontratfreelancerComponent implements OnInit {

  messageErr = ''
  dataArray: any;
  dataArrayy: any;
  logged_in: boolean = false;
  role: string = '';
  freelancerdata: any;

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
    this.logged_in = JSON.parse(localStorage.getItem('logged_in')!);
    console.log(this.logged_in)

    this.role = JSON.parse(localStorage.getItem('role')!);
    console.log(this.role)
    this.freelancerdata = JSON.parse( localStorage.getItem('freelancerdata') !);
    console.log(this.freelancerdata.id)

  }
  ngOnInit(): void {
    this.usersService.missionhomedata(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log(data)
      this.dataArrayy = data ,
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"} 
      //console.log(this.dataArray)
    }) 
    
    this.usersService.freelancerhomedata(this.freelancerdata.id).subscribe(data => {

      console.log(data)
      this.dataArray = data,
        (err: HttpErrorResponse) => {
          console.log(err)
          this.messageErr = "We dont't found this user in our database"
        }
      //console.log(this.dataArray)
    })

    


  }

  generate() {
    window.print()

  }
}
