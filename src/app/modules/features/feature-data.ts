import { DIRECTORY, HOME, PROFILE , ENTREPRENURSHIP, HOLIDAY_CALENDAR, POLICY_DOCUMENTS, PERFORMANCE, JOB_OPENINGS, REFER_CANDIDATE, INTERVIEW, MY_TRAINING, MYTRAINING } from "src/app/constant/routes"


export const sideNavList = [
  { title: 'Home', logo: 'home', isActiv: true, routerLink:'ABS_HOME' ,options:[] },
  { title: 'My Profile', logo: 'person', isActiv: true,routerLink:'ABS_PROFILE' ,options:[]},
  { title: 'Directory', logo: 'description', isActiv: true,routerLink:'ABS_DIRECTORY' ,options:[]},
  { title: 'Enterpreneurship Program', logo: 'person', options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule',routerLink:'ABS_ENTERPRENEUR' }], isActiv: true, },
  { title: 'My Links', logo: 'grid_view', options: [{ subTitle: 'Insurance Verification Details', subLogo: 'checklist',routerLink:'ABS_INSURANCEVERIFICATIONS' },{subTitle: 'holiday calendar', subLogo: 'calendar_today',routerLink:'ABS_HOLIDAYCALENDAR'},{subTitle: 'Policy Documents', subLogo: 'insert_drive_file',routerLink:'ABS_POLICYDOCUMENT'}], isActiv: true, },
  { title: 'Finance', logo: 'payments',options: [{ subTitle: 'Salary slip', subLogo: 'horizontal_rule',type:'external',link:'https://hrms.easysourceindia.com/Payroll/' },{subTitle: 'Form 16', subLogo: 'horizontal_rule',type:'external',link:'https://hrms.easysourceindia.com/Payroll/'},{subTitle: 'Investment Declaration', subLogo: 'horizontal_rule',link:'https://hrms.easysourceindia.com/Payroll/'},], isActiv: true, },
  { title: 'Reviews', logo: 'grid_view', options: [{ subTitle: 'My performance', subLogo: 'event_available',routerLink:'ABS_MYPERFORMANCE' }], isActiv: true, },
  { title: 'Refer a Friend', logo: 'groups', options: [{ subTitle: 'Job Opening',subLogo: 'work',routerLink:'ABS_REFERCANDIDATE' }], isActiv: true, },
  { title: 'Freshers Training', logo: 'school', routerLink:'hweiuewiuieu',options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule' }], isActiv: true, },
  { title: 'Training', logo: 'school',routerLink:'hweiuewiuieu', options: [], isActiv: true, },
  { title: 'Assests Inventory', logo: 'science',routerLink:'hweiuewiuieu', options: [], isActiv: true, },
  { title: 'Attendance', logo: 'schedule',routerLink:'hweiuewiuieu', options: [], isActiv: true, },
  { title: 'Leave', logo: 'calendar_today', routerLink:'hweiuewiuieu',options: [], isActiv: true, },
  { title: 'Tickets', logo: 'view_day',routerLink:'hweiuewiuieu', options: [], isActiv: true, },
  { title: 'DSR', logo: 'calendar_today',routerLink:'hweiuewiuieu', options: [{ subTitle: 'My dsr', subLogo: 'checklist',routerLink:'DSR' }], isActiv: true, },
  { title: 'Projects', logo: 'view_day',routerLink:'hweiuewiuieu', isActiv: true, },
  { title: 'Expense', logo: 'monetization_on', routerLink:'hweiuewiuieu',isActiv: false, },
  { title: 'Announcements', logo: 'campaign',routerLink:'hweiuewiuieu', isActiv: false, },
  { title: 'Travels', logo: 'flight',routerLink:'hweiuewiuieu', isActiv: false, },
  { title: 'Logout', logo: 'logout',routerLink:'hweiuewiuieu', isActiv: true, },
]

export const navBarData:any = [
  {
      name:'Home',
      link: HOME.fullUrl,
      icon:'home',
  },
  {
      name:'My Profile',
      link:PROFILE.fullUrl,
      icon:'person'
  },
  {
      name:'Staff Directory',
      link:DIRECTORY.fullUrl,
      icon:'library_books'
  },
  {
      name:'Entrepreneurship',
      icon:'credit_card',
      subMenuClicked:false,
      subMenu:[
          {
              name:'Explore',
              link:ENTREPRENURSHIP.fullUrl,
              icon:'file_copy'
          }
      ],
  },
  {
      name:'My Links',
      icon:'rate_review',
      subMenuClicked:false,
      subMenu:[
          {
              name:'Insurance Details',
              icon:'list',
              link:''
          },
          {
              name:'Holiday Calender 2023',
              icon:'calendar_today',
              link:HOLIDAY_CALENDAR.fullUrl

          },
          {
              name:'Policy Documents',
              icon:'file_copy',
              link:POLICY_DOCUMENTS.fullUrl
          }
      ],
  },
  {
      name:'Finance',
      icon:'attach_money',
      link:null,
      subMenu:[
          
          {
              name:'Salary Slip',
              icon:'maximize',
              link:'https://hrms.easysourceindia.com/Payroll/'
          },
          {
              name:'Form 16',
              icon:'maximize',
              link:'/https://hrms.easysourceindia.com/Payroll/'
          },
          {
              name:'Investment Declaration',
              icon:'maximize',
              link:'/https://hrms.easysourceindia.com/Payroll/'
          }
      ]
  },
  {   
      name:'Reviews',
      icon:'warning',
      link:null,
      subMenu:[
          {
              name:'My Performance',
              icon:'',
              link:PERFORMANCE.fullUrl
          }
      ]
  },
  {
      name:'Refer A Friend',
      icon:'rate_review',
      subMenuClicked:false,
      // link:'refer-candidate',
      subMenu:[
          {
              name:'Job Openings',
              icon:'list',
              link:JOB_OPENINGS.fullUrl
          },
          {
              name:'Referral List',
              icon:'calendar_today',
              link:REFER_CANDIDATE.fullUrl

          }
      ],

  },
  {
      name:'Recruitment',
      icon:'warning',
      subMenuClicked:false,
      subMenu:[
          {
              name:'My Interview',
              icon:'calendar_today',
              link:INTERVIEW.fullUrl
          }
      ]
  },
  {
      name:'Fresher Training',
      icon:'school',
      subMenuClicked:false,
      subMenu:[
          {
              name:'My Trainings',
              icon:'calendar_today',
              link:MY_TRAINING.fullUrl
          }
      ]
  },
  {
      name:'Training',
      icon:'school',
      subMenuClicked:false,
      subMenu:[
          {
              name:'Upcoming Trainings',
              icon:'calendar_today',
              link:'upcoming-training'
          },
          {
              name:'Ongoing Trainings',
              icon:'calendar_today',
              link:'ongoing-training'
          },
          {
              name:'My Trainings',
              icon:'calendar_today',
              link:'mytraining'
          },
          {
              name:'Requested Trainings',
              icon:'calendar_today',
              link:'requested-training'
          }
      ]
  },
  {
      name:'Assets Inventory',
      icon:'science',
      subMenuClicked:false,
      subMenu:[
          {
              name:'My Assets Inventory',
              icon:'calendar_today',
              link:'my-assets'
          },
          {
              name:'Request Asset',
              icon:'calendar_today',
              link:'requested-assets'
          },
          {
              name:'Asset Declaration',
              icon:'calendar_today',
              link:'assets-declaration'
          }
      ]
  },
  {
      name:'Atendance',
      icon:'schedule',
      subMenuClicked:false,
      subMenu:[
          {
              name:'Attendance Calendar',
              icon:'calendar_today',
              link:'attendance-calendar'
          },
          {
              name:'Manual Punch',
              icon:'calendar_today',
              link:'manual-punch'
          },
          {
              name:'Punch Log',
              icon:'calendar_today',
              link:'punch-log'
          }
      ]   
  },
  {
      name:'My Leave ',
      icon:'calendar_today',
      subMenuClicked:false,
      subMenu:[
          {
              name:'My Leave',
              icon:'calendar_today',
              link:'my-leave'
          },
          {
              name:'Floating Leave',
              icon:'calendar_today',
              link:'floating-leave'
          }
      ] 
  },
  {
      name:'Tickets',
      icon:'calendar_today',
      subMenuClicked:false,
      subMenu:[
          {
              name:'My Tickets',
              icon:'calendar_today',
              link:'ticket'
          }
      ] 
  },
  {
    name:'DSR',
    icon:'calendar_today',
    subMenuClicked:false,
    subMenu:[
        {
            name:'My dsr',
            icon:'calendar_today',  
            link:'dsr'
        }
    ] 
    },
  {
      name:'Projects',
      icon:'view_day',
      subMenuClicked:false,
      link:''
      
  },
  {
      name:'Logout',
      icon:'logout',
      subMenuClicked:false,
      link:''

  }
  
  
]