import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.component.html',
  styleUrls: ['./child-page.component.scss']
})
export class ChildPageComponent implements OnInit {

  public permission = Permission;

  constructor() { }

  ngOnInit(): void {
  }

}
