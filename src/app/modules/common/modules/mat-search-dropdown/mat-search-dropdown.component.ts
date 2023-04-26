import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, startWith, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-mat-search-dropdown',
  templateUrl: './mat-search-dropdown.component.html',
  styleUrls: ['./mat-search-dropdown.component.scss']
})
export class MatSearchDropdownComponent implements OnInit {

  @Input() data:any;
  @Input() controlName:any;

  control: FormControl = new FormControl('', [Validators.required])

  filter: FormControl = new FormControl('');
  filtedOptions!: Observable<Array<Option>>;

  options: Array<Option> = [
    { label: 'Traditional Chinese', value: 'zh-TW' },
    { label: 'Japanese', value: 'jp' },
    { label: 'English', value: 'en' },
    { label: 'Simplified Chinese', value: 'zh-CN' },
    { label: 'Spanish', value: 'es' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Korean', value: 'zh-kor' },
  ];

  constructor() {}

  ngOnInit() {
    this.filtedOptions = this.filter.valueChanges.pipe(
      debounceTime(50),
      startWith(''),
      map(target => target.toLowerCase()),
      tap(target => console.log(target)),
      map(target => this.options.filter(opt => opt.label.toLowerCase().includes( target )))
    );
  }

  getOptionStyle(opt: Option, filted: Array<Option>): {[key: string]: any} {
    const style: {[key: string]: any} = {};

    style.display = filted.indexOf(opt) < 0 ? 'none' : '';

    return style;
  }

}


interface Option {
  label: string;
  value: any;
}