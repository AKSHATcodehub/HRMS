import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    SearchbarComponent
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA,
  //   NO_ERRORS_SCHEMA
  // ]
})
export class SearchbarModule { }
