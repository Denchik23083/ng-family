import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChildReadModel } from './child.service';
import { ParentReadModel } from './parent.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface GenusReadModel{
  id: number,
  name: string,
  children: ChildReadModel[],
  parents: ParentReadModel[]
}

@Injectable({
  providedIn: 'root'
})
export class GenusService {

  apiLink = 'https://localhost:6001/api/genus';

  allGenus$ = new BehaviorSubject<GenusReadModel[]>([]);
  genus$ = new BehaviorSubject<GenusReadModel>(null as any);

  constructor(private http: HttpClient, 
    private router: Router) { }

  getAllGenus(): Observable<GenusReadModel[]>{
    return this.http.get<GenusReadModel[]>(this.apiLink)
      .pipe(
        tap(allGenus => this.allGenus$.next(allGenus))
      );
  }

  getGenus(id: number): Observable<GenusReadModel>{
    return this.http.get<GenusReadModel>(`${this.apiLink}/${id}`)
      .pipe(
        tap(genus => this.genus$.next(genus))
      );
  }
}
