import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-child-id-page',
  templateUrl: './child-id-page.component.html',
  styleUrls: ['./child-id-page.component.scss']
})
export class ChildIdPageComponent implements OnInit {

  public permission = Permission;

  constructor() { }

  ngOnInit(): void {
  }

}
