import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details.component';
import {RouterModule, CanActivate} from "@angular/router";
import {CheckerGuard} from "./checker.guard";



@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component:UsersComponent},
      {path: ":uid", component:UserDetailsComponent, canActivate:[CheckerGuard]}
    ])
  ],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
