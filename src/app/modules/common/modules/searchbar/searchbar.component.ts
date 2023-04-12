import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  @Input() data:any[]=[];
  @Input() reset:any;
  @Output() filteData:EventEmitter<any> = new EventEmitter();

  arr:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  func(event:any){

    this.arr = this.data.filter((item:any)=>{
      if(item.name?.toLowerCase()?.startsWith(event.target.value)){
        return item;
      }else{
        return 
      }
    });

    this.filteData.emit(this.arr);
    
  }


}
