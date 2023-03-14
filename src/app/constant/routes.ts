import {IRoute} from '../interfaces/router.interface';

export const ADMIN:IRoute={
    path:'admin',
    get fullUrl():string{
        return `${this.path}`;
    }
}

export const FEATURES:IRoute={
    path:'features',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const DASHBOARD:IRoute = {
    path:'dashboard',
    get fullUrl():string{
        return `${this.path}`;
    }
}

export const NOTFOUND:IRoute = {
    path:'invalid',
    get fullUrl():string{
        return `/${this.path}`;
    }
} 

export const HOME:IRoute = {
    path:'home',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const PROFILE:IRoute = {
    path:'profile',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const DIRECTORY:IRoute={
    path:'directory',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const ENTREPRENURSHIP:IRoute = {
    path:'entrepreneurship',
    get fullUrl():string{
        return `${this.path}`
    }
}
export const EXPOLRE1:IRoute = {
    path:'explore',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const STARTUP:IRoute = {
    path:'startup',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const ADD_PITCH:IRoute = {
    path:"add_pitch",
    get fullUrl():string{
        return `${this.path}`
    }
}

export const POLICY_DOCUMENTS:IRoute={
    path:'policy-documents',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const PERFORMANCE:IRoute = {
    path:'performance',
    get fullUrl():string{
        return `${this.path}`;
    }
}

export const JOBDETAILS:IRoute = {
    path:"job-details",
    get fullUrl():string{
        return `${this.path}`;
    }
}

export const HOLIDAY_CALENDAR:IRoute = {
    path:'holiday-calendar',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const JOB_OPENINGS:IRoute = {
    path:'job-openings',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const REFER_CANDIDATE:IRoute = {
    path:'refer-candidate',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const INTERVIEW:IRoute = {
    path:'interview',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const MY_TRAINING:IRoute = {
    path:'my-training',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const TRAINING_DETAILS_TRAINE:IRoute = {
    path:'training-details-traine',
    get fullUrl():string{
        return `${this.path}`
    }
}