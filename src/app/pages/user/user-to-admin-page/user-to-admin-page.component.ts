import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-to-admin-page',
  templateUrl: './user-to-admin-page.component.html',
  styleUrls: ['./user-to-admin-page.component.scss']
})
export class UserToAdminPageComponent implements OnInit {

  public permission = Permission;

  constructor() { }

  ngOnInit(): void {
  }

}
