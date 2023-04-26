

export interface IdirectoryInteface{
    team:string;
    members?:Array<members>;
}
interface members{
    name:string;
    profile:string;
    email:string;
    DOB:string;
}

export const DIRECTORY_TEAM_DATA= [
        {
            team:'all'
        },
        {
            team:'.net',
            name:'Alam Veer',
            profile:'Sr. Software Engineer - .NET',
            email:'alam.veer@appinventiv.com',
            DOB:'12th, Apr'    
        },
        {
            team:'.net',
            name:'Arpit Makkar',
            profile:'Sr. Software Engineer - .NET',
            email:'Arpit.makkar@appinventiv.com',
            DOB:' 09th, Dec'    
        },
        {
            team:'.net',
            name:'Ankit Kumar Singh',
            profile:'Sr. Software Engineer - .NET',
            email:'ankit.singh@appinventiv.com',
            DOB:'28th, Apr'    
        },
        {
            team:'.net',
            name:'Rahul Kapoor',
            profile:'Sr. Software Engineer - .NET',
            email:'rahul.kapoor@appinventiv.com',
            DOB:' 07th, Jul'    
        },
        {
            team:'.net',
            name:'Sumant Mehta',
            profile:'Sr. Software Engineer - .NET',
            email:' sumant.mehta@appinventiv.com',
            DOB:'12th, Apr'    
        },
        {
            team:'.net',
            name:'Sunil Mittal',
            profile:'Sr. Software Engineer - .NET',
            email:'sunil.mittal@appinventiv.com',
            DOB:'12th, Apr'    
        },
    
        {
            team:'admin',
            name:'Arvind Singh',
            profile:'VP- Admin - Admin',
            email:'arvind.singh@appinventiv.com',
            DOB:' 28th, Feb'    
        },
        {
            team:'admin',
            name:'Chandan Singh',
            profile:'Personal Security Assistant - Admin',
            email:'Chandan.singh@appinventiv.com',
            DOB:'05th, Jul'    
        },
        {
            team:'admin',
            name:'Gurvinder Singh',
            profile:'SAdmin Executive - Admin',
            email:'Gurvinder.singh1@appinventiv.com',
            DOB:'13th, Jan'    
        },
        {
            team:'admin',
            name:'Kajal kheralia',
            profile:'Front Office Admin - Admin',
            email:' kunakshi.kanwar@appinventiv.com',
            DOB:'05th, Mar'    
        },
        {
            team:'admin',
            name:'Pramod Kumar singh',
            profile:'Driver - Admin',
            email:'Pramod.singh@appinventiv.com',
            DOB:'10th, Aug'    
        },
        {
            team:'DevOps',
            name:'Aman Sharma',
            profile:'Software Engineer - DevOps',
            email:'Aman.sharma2@appinventiv.com',
            DOB:'30th, Dec'    
        },
        {
            team:'DevOps',
            name:'Ayush Arora',
            profile:'Software Engineer - DevOps',
            email:'ayush.arora@appinventiv.com',
            DOB:'08th, Jun'    
        },
        {
            team:'DevOps',
            name:'Bhavana Sharma',
            profile:'Software Engineer - DevOps',
            email:'bhavna.sharma@appinventiv.com',
            DOB:'25th, Nov'    
        },
        {
            team:'DevOps',
            name:'Chetan Kumar',
            profile:'Software Engineer - DevOps',
            email:'chetan.kumar@appinventiv.com',
            DOB:'20th, Aug'    
        },
        {
            team:'DevOps',
            name:'Deepak Pokhriyal',
            profile:'Sr Software Engineer - DevOps',
            email:'Deepak.pokhriyal@appinventiv.com',
            DOB:'10th, Aug'    
        },
   
]


export const ALL_DIRECTORY_TEAM_DATA:any[] = [];

DIRECTORY_TEAM_DATA.forEach((item:any)=>{
    if(item.team!=='all'){
        ALL_DIRECTORY_TEAM_DATA.push(item);
    }
})




const membersList = [
    
    {name:'Aahan Verma',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
    {name:'Abhishek Kumar',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
    {name:'Abhishek Shukla',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
    {name:'Bhavya Goel',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
    {name:'Bikramjeet Singh',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
    {name:'Deepak Sindhu',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
    {name:'Deepak Pokhriyal',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
    {name:'Harsh Kukreti',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
    {name:'Harshit Pathak',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
    {name:'Hritik Bhandari',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
    {name:'ISHIKA CHAUHAN',position:'Sr. Software Engineer - Android',email:'aahan.verma@appinventiv.com',DOB:' 21st, Aug'},
  ]