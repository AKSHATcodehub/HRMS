import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { DsrRoutingModule } from './dsr-routing.module';
import { DsrComponent } from './dsr.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DropdownModule } from '../../common/modules/dropdown/dropdown.module';
import { TableModule } from '../../common/modules/table/table.module';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    DsrComponent
  ],
  imports: [
    CommonModule,
    DsrRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    DropdownModule,
    TableModule,
    MatExpansionModule,
    MatExpansionModule,
    MatIconModule,
    DropdownModule,
    EditorModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class DsrModule { }
