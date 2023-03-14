import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-policy-documents',
  templateUrl: './policy-documents.component.html',
  styleUrls: ['./policy-documents.component.scss']
})
export class PolicyDocumentsComponent implements OnInit {

  datasource = new MatTableDataSource<any>();
  headings = [
    { heading: '#', key: 'no', type: 'text'},
    { heading: 'Name', key: 'UName', type: 'text' },
    { heading: 'Type', key: 'type', type: 'text' },
    { heading: 'File Size', key: 'size', type: 'text'},
    { heading: 'Last Modified', key: 'Modified', type: 'text'},
    // { heading: 'Action', key: 'status', type: 'action', action: [2] , link: '/dashboard/client-details' },
    { heading: 'Action', key: 'status', type: 'download', action: [2] , link: '/dashboard/client-details' }

  ]
  Table_DATA: any[] = [
    { 'no': 1, 'UName': ' Appinventiv_Policy_Manual',                        'type': 'pdf', 'size': '	341.71 KB', 'Modified': '	May-13-2022',link:'/assets/abk.jpeg'  },
    { 'no': 2, 'UName': ' Contact_List_Updated_Appinventiv',                 'type': 'pdf', 'size': '	406.30 KB', 'Modified': '	Apr-20-2022',  },
    { 'no': 3, 'UName': ' Employee_Referral_Policy_and_Process_Appinventiv', 'type': 'pdf', 'size': '	447.03 KB', 'Modified': '	Apr-20-2022',  },
    { 'no': 4, 'UName': ' Holiday-Calendar-2023',                            'type': 'pdf', 'size': '	881.48 KB', 'Modified': 'Jan-02-2023', 'Action':'Download' },
    { 'no': 5, 'UName': ' LeavePolicy',                                      'type': 'pdf', 'size': '	152.90 KB', 'Modified': '	Jan-02-2023',  },
    { 'no': 6, 'UName': ' SexualHarassment',                                 'type': 'pdf', 'size': '	153.03 KB', 'Modified': 'Apr-20-2022',  },
  ]
  constructor() { }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<any>(this.Table_DATA)
  }

}
