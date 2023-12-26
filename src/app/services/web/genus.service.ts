import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChildReadModel, ChildWriteModel } from './child.service';
import { ParentReadModel, ParentWriteModel } from './parent.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface GenusReadModel{
  id: number,
  name: string,
  children: ChildReadModel[],
  parents: ParentReadModel[]
}

export interface GenusWriteModel{
  name: string,
  children: ChildWriteModel[],
  parents: ParentWriteModel[]
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

  createGenus(model: GenusWriteModel): Observable<{}>{
    return this.http.post<{}>(this.apiLink, model)
      .pipe(
        tap(() => this.router.navigate(['/']))
      );
  }
}
