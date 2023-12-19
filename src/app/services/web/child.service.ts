import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserReadModel } from '../users/user.service';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { GenusModel } from './genus.service';

export interface ChildModel{
  id: number,
  userId: number,
  user: UserReadModel,
  genusId: number,
  genus: GenusModel
}

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  apiLink = 'https://localhost:6001/api/child';

  children$ = new BehaviorSubject<ChildModel[]>([]);
  child$ = new BehaviorSubject<ChildModel>(null as any);

  constructor(private http: HttpClient, 
    private router: Router) { }

  getAllChildren(): Observable<ChildModel[]>{
    return this.http.get<ChildModel[]>(this.apiLink)
      .pipe(
        tap(children => this.children$.next(children))
      );
  }

  getChild(id: number): Observable<ChildModel>{
    return this.http.get<ChildModel>(`${this.apiLink}/id?id=${id}`)
      .pipe(
        tap(child => this.child$.next(child))
      );
  }
}
