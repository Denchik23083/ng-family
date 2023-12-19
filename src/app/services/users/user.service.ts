import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChildModel as ChildReadModel } from '../web/child.service';
import { ParentModel as ParentReadModel } from '../web/parent.service';

export interface UserReadNameModel{
  id: number,
  firstName: string,
  email: string,
}

export interface UserReadModel{
  id: number,
  firstName: string,
  birthDay: Date,
  gender: GenderReadModel,
  parent: ParentReadModel,
  child: ChildReadModel,
}

export interface GenderReadModel{
  type: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiLink = 'https://localhost:7001/api/user';

  user$ = new BehaviorSubject<UserReadModel>(null as any);
  users$ = new BehaviorSubject<UserReadNameModel[]>([]);

  constructor(private http: HttpClient, 
    private router: Router,
    private authService: AuthService) { }

  getUser(): Observable<UserReadModel>{
    return this.http.get<UserReadModel>(`${this.apiLink}/profile`)
      .pipe(
        tap(user => this.user$.next(user))
      );
  }

  getUsers(): Observable<UserReadNameModel[]>{
    return this.http.get<UserReadNameModel[]>(this.apiLink)
      .pipe(
        tap(users => this.users$.next(users))
      );
  }

  leaveGenus(): Observable<{}> {
    return this.http.delete<{}>(`${this.apiLink}/leave`)
      .pipe(
        tap(() => this.logout())
      )
  }

  logout(): void {
    this.clearData();
    this.router.navigate(['/']);
  }

  clearData(): void {
    localStorage.clear();
    this.authService.tokenData$.next(null as any);
    this.authService.refreshToken$.next(null as any);
  }
}
