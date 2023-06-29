import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CheckAccessGuard } from "src/app/guards/check-access.guard";
import { DeleteUserComponent } from "./users-edit/delete-user/delete-user.component";
import { UsersEditComponent } from "./users-edit/users-edit.component";
import { UsersComponent } from "./users.component";
const routes = [
  { path: '', component: UsersComponent },
  {
    path: 'edit/:id', component: UsersEditComponent,
    canActivateChild: [CheckAccessGuard], canActivate: [CheckAccessGuard],
    children: [
      { path: 'delete',
        component: DeleteUserComponent,},
    ]
}
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
 export class UsersRoutingModule {}
