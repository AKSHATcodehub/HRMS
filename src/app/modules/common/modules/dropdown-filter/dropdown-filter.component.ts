import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DropDown } from 'src/app/interfaces/common.interface';


@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss']
})
export class DropdownFilterComponent implements OnInit {


  ngOnInit(): void {    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        
        let res = this._filter(value || '');
        if (!res.length) {
          res = ['no results Found'];
        }
        return res;
      })
    );
  }
  myControl = new FormControl('');
  filteredOptions!: Observable<any[]>;

  @Input() dropdown!: DropDown;
  @Output() onDropDownSelect: EventEmitter<any> = new EventEmitter();
  
  constructor() {}
  private _filter(value: any): any[] {
    
    const filterValue = value.toLowerCase();
    
    return this.dropdown.list.filter((option:any) => {
      
      const res = option.viewValue?.toLowerCase().includes(filterValue);
      return res;
    });
  }



  dropdownSelect(event:any) {
    this.onDropDownSelect.emit(event);
  }
}
