import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserReadModel, UserWriteModel } from '../users/user.service';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { GenusReadModel } from './genus.service';

export interface ChildReadModel{
  id: number,
  userId: number,
  user: UserReadModel,
  genusId: number,
  genus: GenusReadModel
}

export interface ChildWriteModel{
  id: number,
  userId: number
}

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  apiLink = 'https://localhost:6001/api/child';

  children$ = new BehaviorSubject<ChildReadModel[]>([]);
  child$ = new BehaviorSubject<ChildReadModel>(null as any);

  constructor(private http: HttpClient, 
    private router: Router) { }

  getAllChildren(): Observable<ChildReadModel[]>{
    return this.http.get<ChildReadModel[]>(this.apiLink)
      .pipe(
        tap(children => this.children$.next(children))
      );
  }

  getChild(id: number): Observable<ChildReadModel>{
    return this.http.get<ChildReadModel>(`${this.apiLink}/${id}`)
      .pipe(
        tap(child => this.child$.next(child))
      );
  }
}
