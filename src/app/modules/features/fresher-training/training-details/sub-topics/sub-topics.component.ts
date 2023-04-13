import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-topics',
  templateUrl: './sub-topics.component.html',
  styleUrls: ['./sub-topics.component.scss']
})
export class SubTopicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    {
      subtopic:'What is SPADifference between SPA and MPAWhat is AngularWhy should we use it?',
      topic:'Introfuction',
      trainer:'Sandeep Gupta',
      trainer_email:'sandeep@gmail.com',
      start_date:'02-03-2022',
      end_date:'02-03-2022',
      resource_url:'---'
    },
    {
      subtopic:'Basic building blocks Basic diff between Angular & other SPA’s Basics of CLI usage	',
      topic:'Basic building block	',
      trainer:'Sandeep Gupta',
      trainer_email:'sandeep@gmail.com',
      start_date:'02-03-2022',
      end_date:'02-03-2022',
      resource_url:'---'
    },
    {
      subtopic:'We will develop a demo project which is currently running in appiventiv. We will use the same api and functionaliy. Duration of this project will be around 3 weeks. Based on perfomance of the tranees we will then onboard them on the live projects.	',
      topic:'Components',
      trainer:'Sandeep Gupta',
      trainer_email:'sandeep@gmail.com',
      start_date:'02-03-2022',
      end_date:'02-03-2022',
      resource_url:'---'
    },
    {
      subtopic:'We will develop a demo project which is currently running in appiventiv. We will use the same api and functionaliy. Duration of this project will be around 3 weeks. Based on perfomance of the tranees we will then onboard them on the live projects.	',
      topic:'Components',
      trainer:'Sandeep Gupta',
      trainer_email:'sandeep@gmail.com',
      start_date:'02-03-2022',
      end_date:'02-03-2022',
      resource_url:'---'
    }


  ]
}
