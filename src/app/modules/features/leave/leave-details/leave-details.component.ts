import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LEAVE_TABLEDATA } from '../my-leave/my-leave-data';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.scss']
})
export class LeaveDetailsComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute) {}

  ngOnInit(): void {
    
    this.routeParameter = this.activateRoute.snapshot.paramMap.get('id');

    this.activateRoute.params.subscribe((para:any)=>{

      console.log('para?>>',para,this.leaveData);
    })

    if(this.routeParameter){
      this.filteredData = this.leaveData.filter((item:any)=>{
        if(this.routeParameter == item.id){
          return item;
        }
      })
    }
    this.filteredData = this.filteredData[0];
    console.log('thid is leave data filter value>>>>>>>>>>>',this.filteredData,this.leaveData);
        
  }
  routeParameter!:string | null;
  leaveData = LEAVE_TABLEDATA;
  filteredData!:any;

}
