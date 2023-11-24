import { Injectable } from '@angular/core';
import { ParentModel } from './parent.service';
import { ChildModel } from './child.service';

export interface GenusModel{
  name: string,
  children: ChildModel[],
  parents: ParentModel[]
}

@Injectable({
  providedIn: 'root'
})
export class GenusService {

  constructor() { }
}
