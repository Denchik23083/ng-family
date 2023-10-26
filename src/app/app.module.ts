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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main/main.component';
import { MainPageComponent } from './pages/main/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MainComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
