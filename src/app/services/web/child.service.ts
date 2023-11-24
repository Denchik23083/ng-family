import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../users/user.service';
import { GenusModel } from './genus.service';

export interface ChildModel{
  userId: number,
  user: UserModel,
  genusId: number,
  genus: GenusModel
}

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  apiLink = 'https://localhost:6001/api/child';

  constructor(private http: HttpClient, 
    private router: Router) { }
}
