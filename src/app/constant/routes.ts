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

export const DSR:IRoute = {
    path:"dsr",
    get fullUrl():string{
        return `${this.path}`
    }
}

export const UPCOMING_TRAINING = {
    path:'upcoming-training',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const ONGOING_TRAINING = {
    path:'ongoing-training',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const MYTRAINING = {
    path:'mytraining',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const REQUESTED_TRAINING = {
    path:'requested-training',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const MY_ASSETS:IRoute = {
    path:'my-assets',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const REQUESTED_ASSETS:IRoute = {
    path:"requested-assets",
    get fullUrl():string{
        return `${this.path}`
    }
}

export const ASSETS_DECLARATION:IRoute = {
    path:'assets-declaration',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const ATTENDANCE_CALENDAR:IRoute = {
    path:'attendance-calendar',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const MANUAL_PUNCH:IRoute = {
    path:'manual-punch',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const PUNCH_LOG:IRoute = {
    path:'punch-log',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const MY_LEAVE:IRoute = {
    path:'my-leave',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const FLOATING_LEAVE:IRoute = {
    path:'floating-leave',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const TICKET:IRoute = {
    path:'ticket',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const DSR_DETAILS:IRoute = {
    path:'dsr-details',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const PROJECT:IRoute = {
    path:'project',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const PROJECT_DETAILS:IRoute = {
    path:'project-details',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const LEAVE_DETAILS = {
    path:'leave-details',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const TRAINING_DETAILS = {
    path:'training-details',
    get fullUrl():string{
        return `${this.path}`
    }

}

export const MY_IDEA:IRoute = {
    path:'my-idea',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const DSR_EDIT:IRoute = {
    path:'edit-dsr',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const FOOD:IRoute={
    path:'food',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const LUNCH_COUPON:IRoute = {
    path:'lunch-coupon',
    get fullUrl():string{
        return`${this.path}`
    }
}

export const REQUESTED_DINNER:IRoute = {
    path:'requested-dinner',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const PURCHASE_LUNCH_COUPON:IRoute = {
    path:'purchase-lunch-coupon',
    get fullUrl():string{
        return `${this.path}`
    }
}