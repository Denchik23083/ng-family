import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface TokenModel {
  jwtToken: string,
  refreshToken: string,
}

export interface TokenData {
  name: string,
  email: string,
  gender: string,
  permissions: string[],
  expires: Date,
  rawToken: string, 
}

export interface GenderReadModel {
  id: number,
  type: string 
}

export interface RegisterModel {
  name: string,
  email: string,
  genderId: number,
  password: string,
  confirmPassword: string,
}

export interface LoginModel {
  email: string,
  password: string,
}

export enum Permission {
  getInfo = 'GetInfo',
  createGenus = 'CreateGenus',
  getChild = 'GetChild',
  getParent = 'GetParent',
  getGenus = 'GetGenus',
  updateDeleteGenus = 'UpdateDeleteGenus',
  deleteUser = 'DeleteUser',
  userToAdmin = 'UserToAdmin',
  adminToUser = 'AdminToUser',
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {  
  apiLink = 'https://localhost:5001/api/auth';
  tokenKey = 'jwtToken';
  refreshTokenKey = 'refreshToken';

  tokenData$ = new BehaviorSubject<TokenData>(null as any);
  refreshToken$ = new BehaviorSubject<string>(null as any);
  genders$ = new BehaviorSubject<GenderReadModel[]>([]);

  constructor(private http: HttpClient, private router: Router) { 
    const rawToken = localStorage.getItem(this.tokenKey);
    if (rawToken) {
      const tokenData = this.getTokenData(rawToken);
      this.tokenData$.next(tokenData);
    }

    const refreshToken = localStorage.getItem(this.refreshTokenKey);
    if(refreshToken){
      this.refreshToken$.next(refreshToken);
    }
  }

  getGenders(): Observable<GenderReadModel[]>{
    return this.http.get<GenderReadModel[]>(`${this.apiLink}/register/gender`)
      .pipe(
        tap(genders => this.genders$.next(genders))
      )
  }

  login(model: LoginModel): Observable<TokenData>{
    return this.http.post<TokenModel>(`${this.apiLink}/login`, model)
      .pipe(
        tap(model => {
          this.tokenData$.next(this.getTokenData(model.jwtToken));
          this.refreshToken$.next(model.refreshToken);
          localStorage.setItem(this.tokenKey, model.jwtToken);
          localStorage.setItem(this.refreshTokenKey, model.refreshToken);
        }),
        map(model => this.getTokenData(model.jwtToken)),
        tap(() => this.router.navigate(['/']))
      )
  }

  refresh(): Observable<TokenData>{
    return this.http.post<TokenModel>(`${this.apiLink}/login/refresh`, 
      { value: this.refreshToken$.value })
      .pipe(
        tap(model => {
          this.tokenData$.next(this.getTokenData(model.jwtToken));
          this.refreshToken$.next(model.refreshToken);
          localStorage.setItem(this.tokenKey, model.jwtToken);
          localStorage.setItem(this.refreshTokenKey, model.refreshToken);
        }),
        map(model => this.getTokenData(model.jwtToken))
      )
  }
  
  getTokenData(token: string): TokenData {
    const payloadBase64 = token.split('.')[1];
    const payload = JSON.parse(atob(payloadBase64));

    const permissions = Array.isArray(payload.permission) ? payload.permission : [payload.permission];
  
    return {
      name: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] as string,
      email: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'] as string,
      permissions: permissions as string[],
      gender: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/gender'] as string,
      expires: new Date(payload.exp * 1000),
      rawToken: token
    };
  }
  
}
