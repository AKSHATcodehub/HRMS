import { Component, OnInit } from '@angular/core';
import { data } from './details-data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  topicsHeading = [
    'S. No.', 'Topic', 'Topic Trainer', 'Trainer Email', 'Start Date', 'End Date', 'Resource URL'
  ]
  topicData = [
    {
      topic:'ANgular',
      topic_trainer:'Sandeep sr',
      trainer_email:'al@gmail.com',
      start_date:'28-02-2022',
      end_date:'28-02-2022',
      url:'--'
    },
    {
      topic:'ANgular',
      topic_trainer:'Sandeep sr',
      trainer_email:'al@gmail.com',
      start_date:'28-02-2022',
      end_date:'28-02-2022',
      url:'--'
    },
    {
      topic:'ANgular',
      topic_trainer:'Sandeep sr',
      trainer_email:'al@gmail.com',
      start_date:'28-02-2022',
      end_date:'28-02-2022',
      url:'--'
    },
    {
      topic:'ANgular',
      topic_trainer:'Sandeep sr',
      trainer_email:'al@gmail.com',
      start_date:'28-02-2022',
      end_date:'28-02-2022',
      url:'--'
    },{
      topic:'ANgular',
      topic_trainer:'Sandeep sr',
      trainer_email:'al@gmail.com',
      start_date:'28-02-2022',
      end_date:'28-02-2022',
      url:'--'
    }
  ]

}
