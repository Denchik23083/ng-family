import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { MainPageComponent } from './pages/main/main-page/main-page.component';
import { PermissionGuard } from './utils/permission.guard';
import { ProfilePageComponent } from './pages/user/profile-page/profile-page.component';
import { Permission } from './services/auth/auth.service';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PermissionGuard]
})
export class AppRoutingModule { }
