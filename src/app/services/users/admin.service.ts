import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenderReadModel, UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface AdminReadNameModel{
  id: number,
  firstName: string,
  birthDay: Date,
  email: string,
  gender: GenderReadModel,
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiLink = 'https://localhost:7001/api/admin';

  admins$ = new BehaviorSubject<AdminReadNameModel[]>([]);

  constructor(private http: HttpClient, 
    private userService: UserService) { }

    getAdmins(): Observable<AdminReadNameModel[]>{
      return this.http.get<AdminReadNameModel[]>(this.apiLink)
        .pipe(
          tap(admins => this.admins$.next(admins))
        );
    }

  removeUser(id: number): Observable<{}> {
    const removeUser = this.userService.parentsChildrenUsers$.value.filter(b => b.id !== id);
    
    return this.http.delete<{}>(`${this.apiLink}/deleteuser/id?id=${id}`)
      .pipe(
        tap(() => this.userService.parentsChildrenUsers$.next(removeUser))
      );
  }
}
