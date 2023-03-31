import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private rendarr:Renderer2,private elementRef:ElementRef) { }

  ngOnInit(): void {
  }

  headings = [
    { heading: 'Project Name', key: 'project_name', type: 'link'},
    { heading: 'Billing Type', key:'billing_type', type: 'text' },
    { heading: 'Resources', key: 'resources', type: 'text' },
    { heading: 'Hrs.', key: 'Hrs', type: 'text'},
    { heading: 'Total Milestone', key: 'Total_Milestone', type: 'text'},
    { heading: 'Delivered', key: 'Delivered', type: 'text' },
    { heading: 'Pending', key: 'Pending', type: 'text'},
    { heading: '% Complete', key: '%_Complete', type: 'text'},
  ]
  Table_DATA: any[] = [
    { project_name: 'Training React js',     link:`/features/project-details`,    billing_type: ' Appinventiv_Policy_Manual', 'Hrs':'1831608','resources': '11', 'Total_Milestone': '1', 'Delivered': '0','Pending':'1' , '%_Complete':'0'},
  ]
  gridFilters = [
    { title:'All',select:true},
    { title:'Ongoing',select:false},
    { title:'Hold',select:false},
    { title:'Finished',select:false},

  ]
  datasource = new MatTableDataSource<any>(this.Table_DATA);
  imageLoop = ['1','2','3','4','5','6','7','8','9','10','11']
  viewTable:boolean = false;
  viewGrid:boolean=true;
  previewElement:any;
  
  showTable(){
    this.viewTable = true;
    this.viewGrid = false
  }


  statusClicked(li:any){

  
    if(this.previewElement){
      
      this.rendarr.removeClass(this.previewElement,'active');
    }
    this.previewElement = li;
    
    this.rendarr.addClass(li,'active');
    // this.rendarr.addClass(a )
  }

  showView(){
    this.viewGrid = true;
    this.viewTable = false;
  }

}
