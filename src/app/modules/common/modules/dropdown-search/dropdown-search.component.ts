import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-dropdown-search',
  templateUrl: './dropdown-search.component.html',
  styleUrls: ['./dropdown-search.component.scss']
})
export class DropdownSearchComponent implements OnInit {

  // @Input() errorType:any; //
  // @Input() formfieldCSS:any;
  // @Input() labelStyle:any;
  @Input() myControlName:any;
  @Input() label: any;
  @Input() data!:any; //dropdowndata
  @Input() selected:any;
  // @Input() selectionChange:any;
  @Input() showRequiredStar:boolean =false
  @Output() eventEmitter = new EventEmitter<any>();

  myControl = new FormControl('');
  filteredOptions!: Observable<any[]>;
  errorMessage = {
    required:'field required'
  }
  constructor() {}

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
  private _filter(value: any): any[] {
    
    const filterValue = value.toLowerCase();
    
    return this.data.list.filter((option:any) => {
      
      const res = option.viewValue?.toLowerCase().includes(filterValue);
      return res;
    });
  }

  onSelection(){
    this.eventEmitter.emit(this.myControlName.value);
  }


}
