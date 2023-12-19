import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { UserService } from './services/users/user.service';
import { AuthService } from './services/auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main/main.component';
import { MainPageComponent } from './pages/main/main-page/main-page.component';
import { AuthHeaderComponent } from './components/headers/auth-header/auth-header.component';
import { MainHeaderComponent } from './components/headers/main-header/main-header.component';
import { AuthInterceptor } from './utils/auth.interceptor';
import { RefreshInterceptor } from './utils/refresh.interceptor';
import { ProfilePageComponent } from './pages/user/profile-page/profile-page.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ChildPageComponent } from './pages/web/child/child-page/child-page.component';
import { ParentPageComponent } from './pages/web/parent/parent-page/parent-page.component';
import { GenusPageComponent } from './pages/web/genus/genus-page/genus-page.component';
import { ChildComponent } from './components/web/child/child/child.component';
import { ParentComponent } from './components/web/parent/parent/parent.component';
import { GenusComponent } from './components/web/genus/genus/genus.component';
import { ChildService } from './services/web/child.service';
import { ParentService } from './services/web/parent.service';
import { GenusService } from './services/web/genus.service';
import { ChildIdComponent } from './components/web/child/child-id/child-id.component';
import { ParentIdComponent } from './components/web/parent/parent-id/parent-id.component';
import { GenusIdComponent } from './components/web/genus/genus-id/genus-id.component';
import { ChildIdPageComponent } from './pages/web/child/child-id-page/child-id-page.component';
import { ParentIdPageComponent } from './pages/web/parent/parent-id-page/parent-id-page.component';
import { GenusIdPageComponent } from './pages/web/genus/genus-id-page/genus-id-page.component';
import { GenusAddComponent } from './components/web/genus/genus-add/genus-add.component';
import { GenusUpdateComponent } from './components/web/genus/genus-update/genus-update.component';
import { GenusAddPageComponent } from './pages/web/genus/genus-add-page/genus-add-page.component';
import { GenusUpdatePageComponent } from './pages/web/genus/genus-update-page/genus-update-page.component';
import { ChangeInfoComponent } from './components/user/change-info/change-info.component';
import { ChangePasswordComponent } from './components/user/change-password/change-password.component';
import { DeleteUserComponent } from './components/user/delete-user/delete-user.component';
import { UserToAdminComponent } from './components/user/user-to-admin/user-to-admin.component';
import { AdminToUserComponent } from './components/user/admin-to-user/admin-to-user.component';
import { ChangeInfoPageComponent } from './pages/user/change-info-page/change-info-page.component';
import { ChangePasswordPageComponent } from './pages/user/change-password-page/change-password-page.component';
import { DeleteUserPageComponent } from './pages/user/delete-user-page/delete-user-page.component';
import { UserToAdminPageComponent } from './pages/user/user-to-admin-page/user-to-admin-page.component';
import { AdminToUserPageComponent } from './pages/user/admin-to-user-page/admin-to-user-page.component';
import { AdminService } from './services/users/admin.service';
import { GodService } from './services/users/god.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MainComponent,
    MainPageComponent,
    AuthHeaderComponent,
    MainHeaderComponent,
    ProfilePageComponent,
    ProfileComponent,
    ChildPageComponent,
    ParentPageComponent,
    GenusPageComponent,
    ChildComponent,
    ParentComponent,
    GenusComponent,
    ChildIdComponent,
    ParentIdComponent,
    GenusIdComponent,
    ChildIdPageComponent,
    ParentIdPageComponent,
    GenusIdPageComponent,
    GenusAddComponent,
    GenusUpdateComponent,
    GenusAddPageComponent,
    GenusUpdatePageComponent,
    ChangeInfoComponent,
    ChangePasswordComponent,
    DeleteUserComponent,
    UserToAdminComponent,
    AdminToUserComponent,
    ChangeInfoPageComponent,
    ChangePasswordPageComponent,
    DeleteUserPageComponent,
    UserToAdminPageComponent,
    AdminToUserPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    UserService,
    AdminService,
    GodService,
    ChildService,
    ParentService,
    GenusService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RefreshInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
