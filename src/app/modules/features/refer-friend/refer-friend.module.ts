import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferFriendRoutingModule } from './refer-friend-routing.module';
import { ReferFriendComponent } from './refer-friend.component';


@NgModule({
  declarations: [
    ReferFriendComponent
  ],
  imports: [
    CommonModule,
    ReferFriendRoutingModule
  ]
})
export class ReferFriendModule { }
