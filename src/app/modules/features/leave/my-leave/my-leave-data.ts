export const SHORT_LEAVE_FIRST_TIME = [ 
  
  '10 AM' , '5 PM'
]

export const SHORT_LEAVE_DETAILS = [
  {
    data:[ '10 AM' , '5 PM'],
    initialValue : '10 AM'

  },
  {
    data:[ '12 PM' , '7 PM'],
    initialValue : '12 PM'

  }
]

export const SHORT_LEAVE_SECOND_TIME = [ '12 PM' , '7 PM']

export const LEAVE_TYPE = [ ' Planned Leave','Privileged Leave','Emergency Leave','Short Leave','All Remaining Leave']

export const LEAVE_HEADING = [
    { heading: 'Action', key: 'action', type: 'leave_action'},
    { heading: 'Leave Type', key: 'leave_type', type: 'text'},
    { heading: 'Request From', key: 'request_from', type: 'date'},
    { heading: 'Request To', key: 'request_to', type: 'date'},
    { heading: 'Applied On', key: 'applied_on', type: 'date'},
    { heading: 'Status', key: 'status', type: 'text'},
    { heading: 'level1', key: 'level1', type: 'text'},
    { heading: 'level2', key: 'level2', type: 'text'},
]

interface leave{
  
    id:number
    action:string,
    leave_type: string,
    request_from:Date ,
    request_to: Date,
    applied_on: Date,
    time_duration:string,
    status: string,
    level1: string,
    level2: string,
    link:string,

  
}

export const LEAVE_TABLEDATA : leave[]= [
    {
      id:1,
      // user_name:'Akshat',
      action:'',
      leave_type: 'Short Leaves',
      request_from: new Date(1,30,2023) ,
      request_to: new Date(1,30,2023) ,
      applied_on: new Date(),
      time_duration:'1 day',
      status: 'Pending',
      level1: 'Suyash Saxena(AI057)',
      level2: 'HR (Human Resourse)',
      link:'/features/leave-details/1 ',
    },
    {
      id:2,
      action:'e',
      leave_type: 'Planned Leave (CL)',
      request_from: new Date(1,30,2023) ,
      request_to: new Date(1,30,2023) ,
      applied_on: new Date(),
      time_duration:'1 day',
      status: 'Pending',
      level1: 'Suyash Saxena(AI057)',
      level2: 'HR (Human Resourse)',
      link:'/features/leave-details/2 ',

    },
    {
      id:3,
      action:'e',
      leave_type: 'Planned Leave (CL)',
      request_from: new Date(1,30,2023) ,
      request_to: new Date(1,30,2023) ,
      applied_on: new Date(),
      time_duration:'1 day',
      status: 'Pending',
      level1: 'Suyash Saxena(AI057)',
      level2: 'HR (Human Resourse)',
      link:'/features/leave-details/3',

    },
    {
      id:4,
      action:'e',
      leave_type: 'Emergency Leave (CL)	',
      request_from: new Date(1,30,2023) ,
      request_to: new Date(1,30,2023) ,
      applied_on: new Date(),
      time_duration:'1 day',
      status: 'Pending',
      level1: 'Suyash Saxena(AI057)',
      level2: 'HR (Human Resourse)',
      link:'/features/leave-details/4 ',

    },
    {
      id:5,
      action:'e',
      leave_type: 'Short Leaves',
      request_from: new Date('february 20, 2023') ,
      request_to: new Date('february 21, 2023') ,
      applied_on: new Date(),
      time_duration:'1 day',
      status: 'Pending',
      level1: 'Suyash Saxena(AI057)',
      level2: 'HR (Human Resourse)',
      link:'/features/leave-details/5 ',

    },
    {
      id:6,
      action:'e',
      leave_type: 'Emergency Leave (CL)	',
      request_from: new Date(1,30,2023) ,
      request_to: new Date(1,30,2023) ,
      applied_on: new Date(),
      time_duration:'1 day',
      status: 'Pending',
      level1: 'Suyash Saxena(AI057)',
      level2: 'HR (Human Resourse)',
      link: '/features/leave-details/6',
    },
    {
      id:7,
      action:'e',
      leave_type: 'Emergency Leave (CL) 	',
      request_from: new Date(1,30,2023) ,
      request_to: new Date(1,30,2023) ,
      applied_on: new Date(),
      time_duration:'1 day',
      status: 'Pending',
      level1: 'Suyash Saxena(AI057)',
      level2: 'HR (Human Resourse)',
      link:'/features/leave-details/7 ',

    },
    {
      id:8,
      action:'e',
      leave_type: 'Short Leaves ',
      request_from:new Date(1,30,2023) ,
      request_to: new Date(1,30,2023) ,
      applied_on: new Date(),
      time_duration:'1 day',
      status: 'Pending',
      level1: 'Suyash Saxena(AI057)',
      level2: 'HR (Human Resourse)',
      link:'/features/leave-details/8 ',

    },
  ];
  
  
  export const LEAVE_STATUS = [
    {leave_name:'Planned Leave (CL) (6.00)',leave_balance:'Planned Leave (CL) Balance (6)'},
    {leave_name:'Privileged Leave (5.50)',leave_balance:'Privileged Leave Balance (5.5)'},
    {leave_name:'Emergency Leave (CL) (6.00)',leave_balance:'Emergency Leave (CL) Balance (6)'},
    {leave_name:'Short Leaves  (10.00)',leave_balance:'Short Leaves  Balance (10)'},

  ]