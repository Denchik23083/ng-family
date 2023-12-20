import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-change-info-page',
  templateUrl: './change-info-page.component.html',
  styleUrls: ['./change-info-page.component.scss']
})
export class ChangeInfoPageComponent implements OnInit {

  public permission = Permission;

  constructor() { }

  ngOnInit(): void {
  }

}
