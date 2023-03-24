import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DropdownModule } from '../../common/modules/dropdown/dropdown.module';
import { TableModule } from '../../common/modules/table/table.module';


@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    EditorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    DropdownModule,
    TableModule
  ]
})
export class TicketModule { }
