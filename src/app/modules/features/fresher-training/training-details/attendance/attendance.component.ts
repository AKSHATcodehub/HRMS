import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data= [
    {
      topic:'Introduction',
      date:'Feb-28-2022',
      attendance:'Present'
    },
    {
      topic:'Basic building block	',
      date:'Feb-28-2022',
      attendance:'Present'
    },
    {
      topic:'Components',
      date:'Feb-28-2022',
      attendance:'Present'
    },
    {
      topic:'Ist - Assignment	',
      date:'Feb-28-2022',
      attendance:'Present'
    },
    {
      topic:'Modules',
      date:'Feb-28-2022',
      attendance:'Present'
    },
    {
      topic:'Routing',
      date:'Feb-28-2022',
      attendance:'Present'
    }
  ]


}
