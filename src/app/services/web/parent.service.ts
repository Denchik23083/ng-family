import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserReadModel, UserWriteModel } from '../users/user.service';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { GenusReadModel } from './genus.service';

export interface ParentReadModel{
  id: number,
  userId: number,
  user: UserReadModel,
  genusId: number,
  genus: GenusReadModel
}

export interface ParentWriteModel{
  id: number,
  userId: number
}

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  apiLink = 'https://localhost:6001/api/parent';

  parents$ = new BehaviorSubject<ParentReadModel[]>([]);
  parent$ = new BehaviorSubject<ParentReadModel>(null as any);

  constructor(private http: HttpClient, 
    private router: Router) { }

  getAllParents(): Observable<ParentReadModel[]>{
    return this.http.get<ParentReadModel[]>(this.apiLink)
      .pipe(
        tap(parents => this.parents$.next(parents))
      );
  }

  getParent(id: number): Observable<ParentReadModel>{
    return this.http.get<ParentReadModel>(`${this.apiLink}/${id}`)
      .pipe(
        tap(parent => this.parent$.next(parent))
      );
  }
}
