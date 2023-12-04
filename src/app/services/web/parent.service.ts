import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../users/user.service';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { GenusModel } from './genus.service';

export interface ParentModel{
  userId: number,
  user: UserModel,
  genusId: number,
  genus: GenusModel
}

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  apiLink = 'https://localhost:6001/api/parent';

  parents$ = new BehaviorSubject<ParentModel[]>([]);
  parent$ = new BehaviorSubject<ParentModel>(null as any);

  constructor(private http: HttpClient, 
    private router: Router) { }

  getAllParents(): Observable<ParentModel[]>{
    return this.http.get<ParentModel[]>(this.apiLink)
      .pipe(
        tap(parents => this.parents$.next(parents))
      );
  }

  getParent(id: number): Observable<ParentModel>{
    return this.http.get<ParentModel>(`${this.apiLink}/id?id=${id}`)
      .pipe(
        tap(parent => this.parent$.next(parent))
      );
  }
}
