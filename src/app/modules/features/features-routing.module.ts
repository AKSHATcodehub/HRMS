import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DASHBOARD, DIRECTORY, ENTREPRENURSHIP, HOME, PERFORMANCE, POLICY_DOCUMENTS, PROFILE } from 'src/app/constant/routes';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
