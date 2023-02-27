import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  keyupData:any;
  showList:any;
  filter:any;
  reset:string='';

  constructor() { }

  ngOnInit(): void {
    this.showList = this.membersList;
  }

  data=['Aahan Verma','Abhishek Kumar','Abhishek Shukla','Bhavya Goel','Bikramjeet Singh','Deepak Sindhu','Deepak Pokhriyal','Harsh Kukreti','Harshit Pathak']

  membersList = [
       
      {name:'Aahan Verma',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Abhishek Kumar',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Abhishek Shukla',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Bhavya Goel',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Bikramjeet Singh',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Deepak Sindhu',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Deepak Pokhriyal',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Harsh Kukreti',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Harshit Pathak',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'Hritik Bhandari',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
      {name:'ISHIKA CHAUHAN',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
  ]

  filterDataHandler(filterData:any){
    console.log("this is filter data...",filterData);
    this.filter = filterData;
    
  }

  clickSearch(){
    this.showList = this.filter;
  }

  clickReset(){
    this.reset = '';
    console.log("reset");
    

  }

  keyfunc(event:any){
    this.keyupData = event.target.value;
    if(this.keyupData.length == 0){
      this.membersList= this.membersList;
    }
  }


}
