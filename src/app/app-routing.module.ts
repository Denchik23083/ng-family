import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { MainPageComponent } from './pages/main/main-page/main-page.component';
import { PermissionGuard } from './utils/permission.guard';
import { ProfilePageComponent } from './pages/user/profile-page/profile-page.component';
import { Permission } from './services/auth/auth.service';
import { ChildPageComponent } from './pages/web/child/child-page/child-page.component';
import { ParentPageComponent } from './pages/web/parent/parent-page/parent-page.component';
import { GenusPageComponent } from './pages/web/genus/genus-page/genus-page.component';
import { ChildIdPageComponent } from './pages/web/child/child-id-page/child-id-page.component';
import { ParentIdPageComponent } from './pages/web/parent/parent-id-page/parent-id-page.component';
import { GenusIdPageComponent } from './pages/web/genus/genus-id-page/genus-id-page.component';
import { GenusAddPageComponent } from './pages/web/genus/genus-add-page/genus-add-page.component';
import { GenusUpdatePageComponent } from './pages/web/genus/genus-update-page/genus-update-page.component';
import { DeleteUserPageComponent } from './pages/user/delete-user-page/delete-user-page.component';
import { UserToAdminPageComponent } from './pages/user/user-to-admin-page/user-to-admin-page.component';
import { AdminToUserPageComponent } from './pages/user/admin-to-user-page/admin-to-user-page.component';
import { ChangeInfoPageComponent } from './pages/user/change-info-page/change-info-page.component';
import { ChangePasswordPageComponent } from './pages/user/change-password-page/change-password-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  {
    path: 'profile', 
    component: ProfilePageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.getInfo] }
  },
  {
    path: 'profile/edit', 
    component: ChangeInfoPageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.getInfo] }
  },
  {
    path: 'profile/password', 
    component: ChangePasswordPageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.getInfo] }
  },
  {
    path: 'deleteuser', 
    component: DeleteUserPageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.deleteUser] }
  },
  {
    path: 'usertoadmin', 
    component: UserToAdminPageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.userToAdmin] }
  },
  {
    path: 'admintouser', 
    component: AdminToUserPageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.adminToUser] }
  },
  {
    path: 'children', 
    component: ChildPageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.getInfo] }
  },
  {
    path: 'parents', 
    component: ParentPageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.getInfo] }
  },
  {
    path: 'genus', 
    component: GenusPageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.getInfo] }
  },
  {
    path: 'children/:id', 
    component: ChildIdPageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.getInfo] }
  },
  {
    path: 'parents/:id', 
    component: ParentIdPageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.getInfo] }
  },
  {
    path: 'genus/:id', 
    component: GenusIdPageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.getInfo] }
  },
  {
    path: 'genus/add', 
    component: GenusAddPageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.createGenus] }
  },
  {
    path: 'genus/:id/edit', 
    component: GenusUpdatePageComponent,
    canActivate: [PermissionGuard],
    data: { permissions: [Permission.updateDeleteGenus] }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PermissionGuard]
})
export class AppRoutingModule { }
