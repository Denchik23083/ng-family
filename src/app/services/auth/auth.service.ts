import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

export interface GenderModel {
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
  getChild = 'GetChild',
  getParent = 'GetParent',
  crudGenus = 'CrudGenus',
  removeUser = 'RemoveUser',
  userToAdmin = 'UserToAdmin',
  adminToUser = 'AdminToUser',
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {  
  apiLink = 'https://localhost:5001/api/auth';

  constructor(private http: HttpClient, private router: Router) { }

  login(model: LoginModel): Observable<TokenData>{
    return this.http.post<TokenModel>(`${this.apiLink}/login`, model)
      .pipe(
        tap(model => {
          console.log(this.getTokenData(model.jwtToken))
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
