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
    ChildService,
    ParentService,
    GenusService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RefreshInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
