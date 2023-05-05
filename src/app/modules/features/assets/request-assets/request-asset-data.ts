// S.No	Status	Request Reason	Priority	Requested At	Assets Category	Allocation type	Company

export const REQUESTED_ASSETS_HEADING = [
  { heading: 'S.No.', key: 's_no', type: 'text' },
  { heading: 'Status', key: 'Status', type: 'text' },
  { heading: 'Request Reason', key: 'Request_Reason', type: 'text' },
  { heading: 'Priority', key: 'Priority', type: 'text' },
  { heading: 'Requested At', key: 'Requested_At', type: 'date' },
  { heading: 'Assets Category', key: 'Assets_Category', type: 'text' },
  { heading: 'Allocation type', key: 'Allocation_type', type: 'text' },
  { heading: 'Company', key: 'Company', type: 'text' },
];

export const REQUESTED_ASSETS_TABLE_DATA = [
  {
    s_no: 1,
    Status: 'None',
    Request_Reason: 'none',
    Priority: 'Low',
    Requested_At: new Date(),
    Assets_Category: 'Desktop',
    Allocation_type: 'Permanent',
    Company: 'HP',
  },
];

export const DROPDOWN_DATA = {
  category:{
    data:['Laptop','Desktop','Mobile'],
    placeholder:'Selct Assets Category',
    initialvalue:''
  },
  quantity:{
    data:['1','2','3','4','5'],
    placeholder:'Selct Quality',
    initialvalue:''
  },
  priority:{
    data:['Low','Medium','High'],
    placeholder:'Selct Priority',
    initialvalue:''
  },
  allocation_type:{
    data:['Permanent','Temporary'],
    placeholder:'Selct Allocation Type',
    initialvalue:''
  }
}

