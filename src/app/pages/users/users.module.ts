import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { CheckAccessGuard } from 'src/app/guards/check-access.guard';
import { DeleteUserComponent } from './users-edit/delete-user/delete-user.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    UsersComponent,
    UsersEditComponent,
    DeleteUserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
