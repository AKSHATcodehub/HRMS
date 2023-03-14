import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADD_PITCH, DASHBOARD, DIRECTORY, ENTREPRENURSHIP, HOLIDAY_CALENDAR, HOME, INTERVIEW, JOBDETAILS, JOB_OPENINGS, MY_TRAINING, PERFORMANCE, POLICY_DOCUMENTS, PROFILE, REFER_CANDIDATE, TRAINING_DETAILS_TRAINE } from 'src/app/constant/routes';
import { FeaturesComponent } from './features.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path:'',
    component:FeaturesComponent,
    children:[
      {
        path:'',
        redirectTo:HOME.fullUrl
        
      },
      {
        path:HOME.fullUrl,
        pathMatch:'full',
        loadChildren:()=>import('./home/home.module').then(
          (m)=>HomeModule
        )
      },
      {
        path:PROFILE.fullUrl,
        pathMatch:'full',
        loadChildren:()=>import('./profile/profile.module').then(
          (m)=>m.ProfileModule
        )
      },
      {
        path:DIRECTORY.fullUrl,
        pathMatch:'full',
        loadChildren:()=>import('./directory/directory.module').then(
          (m)=>m.DirectoryModule
        )
      },
      {
        path:ENTREPRENURSHIP.fullUrl,
        pathMatch:'full',
        loadChildren:()=>import('./entrepreneurship/entrepreneurship.module').then(
          (m)=>m.EntrepreneurshipModule
        )

      },
      {
        path:POLICY_DOCUMENTS.fullUrl,
        loadChildren:()=>import('./my-links/my-links.module').then(
          (m)=>m.MyLinksModule
        )
      },
      {
        path:PERFORMANCE.fullUrl,
        loadChildren:()=>import('./performance/performance.module').then(
          (m)=>m.PerformanceModule
        )
      },
      {
        path:JOBDETAILS.fullUrl,
        loadChildren:()=>import('./job-details/job-details.module').then(
          (m)=>m.JobDetailsModule
        )
      },
      {
        path:ADD_PITCH.fullUrl,
        loadChildren:()=>import('./entrepreneurship/add-pitch/add-pitch.module').then(
          (m)=>m.AddPitchModule)
      },
      {
        path:HOLIDAY_CALENDAR.fullUrl,
        loadChildren:()=>import('./my-links/holiday-calendar/holiday-calendar.module').then(
          (m)=>m.HolidayCalendarModule)
      },
      {
        path:REFER_CANDIDATE.fullUrl,
        loadChildren:()=>import('./refer-friend/referral-list/referral-list.module').then(
          (m)=>m.ReferralListModule
        )
      },
      {
        path:JOB_OPENINGS.fullUrl,
        loadChildren:()=>import('./refer-friend/job-opening/job-opening.module').then(
          (m)=>m.JobOpeningModule
        )
      },
      {
        path:INTERVIEW.fullUrl,
        loadChildren:()=>import('./recruitment/interview/interview.module').then(
          (m)=>m.InterviewModule
        )
      },
      {
        path:MY_TRAINING.fullUrl,
        loadChildren:()=>import('./fresher-training/my-training/my-training.module').then(
          (m)=>m.MyTrainingModule
        )
      },
      {
        path:TRAINING_DETAILS_TRAINE.fullUrl,
        loadChildren:()=>import('./fresher-training/training-details/training-details.module').then(
          (m)=>m.TrainingDetailsModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
