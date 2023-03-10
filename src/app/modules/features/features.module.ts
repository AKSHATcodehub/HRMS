import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
// import { HeaderComponent } from './feature-parts/header/header.component';
// import { FooterComponent } from './feature-parts/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    FeaturesComponent,
    // HeaderComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule
  ] 
}) 
export class FeaturesModule { }
