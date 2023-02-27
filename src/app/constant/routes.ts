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

export const STARTUP:IRoute = {
    path:'startup',
    get fullUrl():string{
        return `${this.path}`
    }
}

export const ADD_PITCH:IRoute = {
    path:"add_patch",
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