import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-delete-user-page',
  templateUrl: './delete-user-page.component.html',
  styleUrls: ['./delete-user-page.component.scss']
})
export class DeleteUserPageComponent implements OnInit {

  public permission = Permission;

  constructor() { }

  ngOnInit(): void {
  }

}
