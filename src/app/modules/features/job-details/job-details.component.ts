import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JOB_OPENINGS } from '../home/latest-job-cards/latest-job-card-data';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  constructor(private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this._activateRoute.params.subscribe((params:any)=>{

      this.jobDetailsData  = this.jobOpeningsData.filter((job:any)=>{
        
        if(job.job_id ==  params.id){
          return job;
        }
      })
      
      this.jobDetailsData = Object.assign({},...this.jobDetailsData);
    
    })

  }

  jobOpeningsData = JOB_OPENINGS;
  jobDetailsData:any;




}
