export const INTERVIEW_DATA = [
    {
        s_no:'1',
        department:'1',
        name:'Shivam Singh',
        email:'shivam5@gmail.com',
        mobile_number:'89894904',
        round_type:'round_1',
        interview_date:'2023-03-04',
        interview_time:'22:09',
        final_status:'1',
        team:'Java',
        status:'Selected'
    },
    {
        s_no:'2',
        department:'2',
        name:'Swapnil Maurya',
        email:'swapnil@gmail.com',
        mobile_number:'79867799',
        round_type:'round_2',
        interview_date:'2023-02-02',
        interview_time:'22:09',
        final_status:'2',
        team:'Angular',
        status:'Selected'


    },
    {
        s_no:'3',
        department: '3',
        name:'Arpit Dwivedi',
        email:'arpit@gmail.com',
        mobile_number:'76769798',
        round_type:'round_5',
        interview_date:'2023-01-01',
        interview_time:'22:09',
        final_status:'3',
        team:'Angular',
        status:'Selected'
        

    },
    {
        s_no:'4',
        department:'4',
        name:'Rishab Ghildiyal',
        email:'swapnil@gmail.com',
        mobile_number:'79867799',
        round_type:'round_10',
        interview_date:'2023-02-10',
        interview_time:'22:09',
        final_status:'4',
        team:'Admin',
        status:'Selected'


    },
    {
        s_no:'5',
        department:'5',
        name:'Walter White',
        email:'walter@gmail.com',
        mobile_number:'69876978',
        round_type:'round_1',
        interview_date:'2023-02-05',
        interview_time:'22:09',
        final_status:'1',
        team:'Java',
        status:'In-progress'


    },
    {
        s_no:'6',
        department:'6',
        name:'Jesse Pinkman',
        email:'jesse@gmail.com',
        mobile_number:'79867799',
        round_type:'round_3',
        interview_date:'2023-01-06',
        interview_time:'22:09',
        final_status:'3',
        team:'Finance',
        status:'In-progress'


    },
    {
        s_no:'7',
        department:'7',
        name:'ankit Singh',
        email:'ankit5@gmail.com',
        mobile_number:'89894904',
        round_type:'round_1',
        interview_date:'2023-03-04',
        interview_time:'22:09',
        final_status:'1',
        team:'Java',
        status:'In-progress'

    },
    {
        s_no:'8',
        department:'8',
        name:'Suraj Maurya',
        email:'suraj@gmail.com',
        mobile_number:'79867799',
        round_type:'round_2',
        interview_date:'2023-02-02',
        interview_time:'22:09',
        final_status:'2',
        team:'Angular',
        status:'Missed'


    },
    {
        s_no:'9',
        department: '9',
        name:'pankaj mishra',
        email:'pankaj@gmail.com',
        mobile_number:'76769798',
        round_type:'round_5',
        interview_date:'2023-01-01',
        interview_time:'22:09',
        final_status:'3',
        team:'Angular',
        status:'Missed'


    },
    {
        s_no:'10',
        department:'10',
        name:'Rahul Sharma',
        email:'rahul@gmail.com',
        mobile_number:'79867799',
        round_type:'round_10',
        interview_date:'2023-02-10',
        interview_time:'22:09',
        final_status:'4',
        team:'Admin',
        status:'Rejected'


    },
    {
        s_no:'11',
        department:'11',
        name:'vijay verma',
        email:'vijay@gmail.com',
        mobile_number:'69876978',
        round_type:'round_1',
        interview_date:'2023-02-05',
        interview_time:'22:09',
        final_status:'1',
        team:'Java',
        status:'Rejected'


    },
    {
        s_no:'12',
        department:'12',
        name:'Abhay purwa',
        email:'abhay@gmail.com',
        mobile_number:'79867799',
        round_type:'round_3',
        interview_date:'2023-01-06',
        interview_time:'22:09',
        final_status:'3',
        team:'Finance',
        status:'rejected'


    },
    
]

export const DEPARTMENT_OPTIONS = [

    // 'Select Department',
    'Admin',
    'Angular',
    'Finance',
    'Java'
//     Flutter
//     Government Team Marketing
//     House Keeping
//     HR
//     HTML
//     iOS
//     IT
//     Java
//     MAD
//     Magento
//     Management
//     Marketing
//     MeanStack
//     Node.js
// PHP
//     Project Management
//     Python
//     Quality Analyst
//     React JS
//     React Native
//     Sales
//     SalesForce
//     Word Press

]

export const INTERVIEW_STATUS = [
  
            // 'Select Status',
            'Selected',
            'Rejected',
            'Missed',
            'In-Progress'
]
          
export const INTERVIEW_HEADING = [
    { heading: 'S.No.', key: 's_no', type: 'text',sort:true},
    { heading: 'Department', key: 'department', type: 'text',sort:true },
    { heading: 'Name', key: 'name', type: 'text',sort:true },
    { heading: 'Email', key: 'email', type: 'text',sort:true},
    { heading: 'Mobile No.', key: 'mobile_number', type: 'text',sort:true},
    { heading: 'Round Type', key: 'round_type', type: 'text', action: [2] , link: '/dashboard/client-details' ,sort:true},
    { heading: 'Interview Date', key: 'interview_date', type: 'text', action: [2] , link: '/dashboard/client-details' ,sort:true},
    { heading: 'Interview Time', key: 'interview_time', type: 'text',sort:true},
    { heading: 'Final Status', key: 'status', type: 'text',sort:true},
    { heading: 'Team', key: 'team', type: 'text',sort:true},

]




