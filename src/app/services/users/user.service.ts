import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface UserModel{
  firstName: string,
  lastName: string,
  birthDay: Date,
  gender: GenderModel,
  parent: ParentModel,
  child: ChildModel,
}

export interface ChildModel{
  userId: number,
  user: UserModel,
  genusId: number,
  genus: GenusModel
}

export interface ParentModel{
  userId: number,
  user: UserModel,
  genusId: number,
  genus: GenusModel
}

export interface GenusModel{
  name: string,
  children: ChildModel[],
  parents: ParentModel[]
}

export interface GenderModel{
  type: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiLink = 'https://localhost:7001/api/user';

  user$ = new BehaviorSubject<UserModel>(null as any);

  constructor(private http: HttpClient, 
    private router: Router,
    private authService: AuthService) { }

  getUser(): Observable<UserModel>{
    return this.http.get<UserModel>(`${this.apiLink}/profile`)
      .pipe(
        tap(user => {
          this.user$.next(user)
          console.log(this.user$.value)
        })
      );
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
