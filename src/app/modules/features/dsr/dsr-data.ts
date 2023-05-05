export const DROPDOWN_DATA = [
  { 
    data:[  'Training Project React JS', 'Miscellaneous',  'Interview'],
    placeholder:'Select Project',
    initialvalue:''
  },
  { 
    data:[ 'Aashini Sharma','Aashish Sharma','Aatish Mittal','Abhijeet Bhadouria','Akanksha Singh'],
    placeholder:'Select Authority',
    initialvalue:''
  },  
  { 
    data:[ 'Aashini Sharma','Aashish Sharma','Aatish Mittal','Abhijeet Bhadouria','Akanksha Singh'],
    placeholder: 'Select Authority',
    initialvalue:''
  },  
  { 
    data:[ 'Account Manager','Amardeep Rawat','Amit Singh','Anant Agarwal','Aparna Kaushik','Apeksha Mehta'],
    placeholder:'Select AM',
    initialvalue:''
  },  
  { 
    data:['Submitted','Due'],
    placeholder:"Select Status",
    initialvalue:''
  },  
  { 
    data:[ 'Training Project React.js'],
    placeholder:'Select Project',
    initialvalue:''
  },
  { 
    data: ['Pending','Approved','Rejected'],
    placeholder:'Select Approval status',
    initialvalue:''
  },

]

export const PROJECT_DROPDOWN = [
  'Training Project React JS',
  'Miscellaneous', 
  'Interview',
];

export const CHOOSE_AM = [ 'Account Manager','Amardeep Rawat','Amit Singh','Anant Agarwal','Aparna Kaushik','Apeksha Mehta']

export const APPROVING_AUTHORITY = ['Aashini Sharma','Aashish Sharma','Aatish Mittal','Abhijeet Bhadouria','Akanksha Singh'];

export const DSR_HEADING = [
  { heading: 'S.No.', key: 's_no', type: 'text',sort:true},
  { heading: 'Employee Name', key: 'emp_name', type: 'text' ,sort:true},
  { heading: 'Employee Id', key: 'emp_id', type: 'text' ,sort:true},
  { heading: 'Email', key: 'email', type: 'text',sort:true},
  { heading: 'Employee Type', key: 'employment_type', type: 'text',sort:true},
  { heading: 'Date', key: 'date', type: 'text', action: [2] , link: '/dashboard/client-details',sort:true },
  { heading: 'Logged Hr', key: 'logged_hr', type: 'text', action: [2] , link: '/dashboard/client-details',sort:true },
  { heading: 'status', key: 'status', type: 'text',sort:true},
  { heading: 'Approval Status', key: 'approval_status', type: 'dsr_status' , link:'dsr-details',sort:true},

]

export var DSR_TABLEDATA:any = [
  {
    s_no: 1,
    emp_name: 'akshat',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-04',
    logged_hr: 2,
    approval_status: 'Pending',
    status: 'Submitted',
    link:`/features/dsr-details?data=1`,
    dsr_description: ['this is dsr 1 '],
  },
  {
    s_no: 2,
    emp_name: 'akshat',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-07',
    logged_hr: 15,
    approval_status: 'Pending',
    status: 'Due',
    link:`/features/dsr-details?data=2`,
    dsr_description: ['this is dsr 2'],
  },
  {
    s_no: 3,
    emp_name: 'akshat',
    emp_id: '1553',  
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-08',
    logged_hr: 1,
    approval_status: 'Approved',
    status: 'Due',
    link:`/features/dsr-details?data=3`,
    dsr_description: ['this is dsr 3'],
  },

  {
    s_no: 4,
    emp_name: 'akshat',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-09',
    logged_hr: 10,
    approval_status: 'Approved',
    status: 'Due',
    link:`/features/dsr-details?data=4`,
    dsr_description: ['this is dsr 4'],
  },
  {
    s_no: 5,
    emp_name: 'akshat',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-10',
    logged_hr: 8,
    approval_status: 'Approved',
    status: 'Due',
    link:`/features/dsr-details?data=5`,
    dsr_description: ['this is dsr 5'],
  },
  {
    s_no: 6,
    emp_name: 'akshat',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-11',
    logged_hr: 2,
    approval_status: 'Rejected',
    status: 'Due',
    link:`/features/dsr-details?data=6`,
    dsr_description: ['this is dsr 6'],
  },
  {
    s_no: 7,
    emp_name: 'akshat ',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-12',
    logged_hr: 3,
    approval_status: 'Rejected',
    status: 'Due',
    link:`/features/dsr-details?data=7`,
    dsr_description: ['this is dsr 7'],
  },
  {
    s_no: 8,
    emp_name: 'akshat ',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-14',
    logged_hr: 5,
    approval_status: 'Rejected',
    status: 'Due',
    link:`/features/dsr-details?data=8`,
    dsr_description: ['this is dsr 8'],
  },
  {
    s_no: 9,
    emp_name: 'akshat',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-13',
    logged_hr: 5,
    approval_status: 'Pending',
    status: 'Due',
    link:`/features/dsr-details?data=9`,
    dsr_description: ['this is dsr 9'],
  },
  {
    s_no: 10,
    emp_name: 'akshat',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-15',
    logged_hr: 9,
    approval_status: 'Pending',
    status: 'Submitted',
    link:`/features/dsr-details?data=10`,
    dsr_description: ['this is dsr 10'],
  },
  {
    s_no: 11,
    emp_name: 'akshat',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-4',
    logged_hr: 10,
    approval_status: 'Approved',
    status: 'Due',
    link:`/features/dsr-details?data=11`,
    dsr_description: ['this is dsr 11'],
  },
  {
    s_no: 12,
    emp_name: 'akshat',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-20',
    logged_hr: 3,
    approval_status: 'Approved',
    status: 'Submitted',
    link:`/features/dsr-details?data=12`,
    dsr_description: ['this is dsr 12'],
  },
  {
    s_no: 13,
    emp_name: 'akshat',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-21',
    logged_hr: 4,
    approval_status: 'Approved',
    status: 'Submitted',
    link:`/features/dsr-details?data=13`,
    dsr_description: ['this is dsr 13'],
  },
  {
    s_no: 14,
    emp_name: 'akshat',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-22',
    logged_hr: 7,
    approval_status: 'Pending',
    status: 'Submitted',
    link:`/features/dsr-details?data=14`,
    dsr_description: ['this is dsr 14'],
  },
  {
    s_no: 15,
    emp_name: 'akshat',
    emp_id: '1553',
    email: 'akshat@appinventiv.com',
    employment_type: 'Permanent',
    date: '2023-03-24',
    logged_hr: 15,
    approval_status: 'Pending',
    status: 'Submitted',
    link:`/features/dsr-details?data=15`,
    dsr_description: ['this is dsr 15'],
  },
];
export const DSR_TABLE_COUNT = 15;

export const HOURS_STATUS  = [
  {
      viewValue:'Less than eqaual to 5 ',
      value:1
  },
  {
      viewValue:'More than 5 and Less than equal to 8',
      value:2
  },
  {
      viewValue:'More than 8',
      value:3
  },
  {
      viewValue:'More than 10',
      value:4
  }
]