import { Injectable } from '@angular/core';
import { ParentModel } from './parent.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChildModel } from './child.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface GenusModel{
  id: number,
  name: string,
  children: ChildModel[],
  parents: ParentModel[]
}

@Injectable({
  providedIn: 'root'
})
export class GenusService {

  apiLink = 'https://localhost:6001/api/genus';

  allGenus$ = new BehaviorSubject<GenusModel[]>([]);
  genus$ = new BehaviorSubject<GenusModel>(null as any);

  constructor(private http: HttpClient, 
    private router: Router) { }

  getAllGenus(): Observable<GenusModel[]>{
    return this.http.get<GenusModel[]>(this.apiLink)
      .pipe(
        tap(allGenus => this.allGenus$.next(allGenus))
      );
  }

  getGenus(id: number): Observable<GenusModel>{
    return this.http.get<GenusModel>(`${this.apiLink}/id?id=${id}`)
      .pipe(
        tap(genus => this.genus$.next(genus))
      );
  }
}
