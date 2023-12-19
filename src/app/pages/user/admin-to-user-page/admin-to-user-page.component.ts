import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin-to-user-page',
  templateUrl: './admin-to-user-page.component.html',
  styleUrls: ['./admin-to-user-page.component.scss']
})
export class AdminToUserPageComponent implements OnInit {

  public permission = Permission;

  constructor() { }

  ngOnInit(): void {
  }

}
