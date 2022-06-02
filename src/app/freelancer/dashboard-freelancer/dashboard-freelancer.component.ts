import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-dashboard-freelancer',
  templateUrl: './dashboard-freelancer.component.html',
  styleUrls: ['./dashboard-freelancer.component.css']
})
export class DashboardFreelancerComponent implements OnInit {

  @ViewChild('htmlData') htmlData!: ElementRef;
  docDefinition: any;
  url: any

  freelancerdata: any;
  dataArray: any;
  messageErr: any;
  countAllFreelancerr: any;

  constructor(private usersService: UsersService) {
    this.freelancerdata = JSON.parse(localStorage.getItem('freelancerdata')!);
    console.log(this.freelancerdata)

    this.countAllFreelancerr = JSON.parse(localStorage.getItem('countAllFreelancerr')!);

  }
  ngOnInit(): void {

    this.usersService.countAllFreelancer(this.freelancerdata.id).subscribe(data => {

      console.log(data.data[0])
      localStorage.setItem('countAllFreelancerr', JSON.stringify(data.data[0]));
      this.dataArray = data, (err: HttpErrorResponse) => {
        console.log(err)
        this.messageErr = "We dont't found this user in our database"
      }
      console.log(this.dataArray)
    })
  }


  async getPdf() {

    this.docDefinition = {
      /*header: 'Resume',*/
      content: [

        {
          text: 'Freelancy Statistique System',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },

       

        {
          text: 'Freelancer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: "Full Name : " + this.freelancerdata.lastname + " " + this.freelancerdata.firstname,
                fontSize: 20,
                bold: true,
      
                decoration: 'underline',
                color: 'skyblue'
              },
              
            ],
            [

            ]
          ]
        },
        {
          text: 'Statistique Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              { text: "Requests : " + this.countAllFreelancerr.requests },

              {
                text: "Active Missions : " + this.countAllFreelancerr.activemissions,
                bold: true
              },
              {

                text: "Ended Missions  : " + this.countAllFreelancerr.endedmissions,

              },


              { text: "Education : " + this.countAllFreelancerr.education },
              { text: "Language : " + this.countAllFreelancerr.language },
              { text: "Experience : " + this.countAllFreelancerr.experience },




            ],
            [

            ]
          ]
        },



      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      }
    };
    pdfMake.createPdf(this.docDefinition).open();
  }


}
