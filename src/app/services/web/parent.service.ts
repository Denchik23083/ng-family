import { Injectable } from '@angular/core';
import { UserModel } from '../users/user.service';
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

  constructor() { }
}
