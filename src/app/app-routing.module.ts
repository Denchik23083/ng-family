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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PermissionGuard]
})
export class AppRoutingModule { }
