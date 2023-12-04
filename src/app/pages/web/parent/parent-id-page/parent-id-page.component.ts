import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-parent-id-page',
  templateUrl: './parent-id-page.component.html',
  styleUrls: ['./parent-id-page.component.scss']
})
export class ParentIdPageComponent implements OnInit {

  public permission = Permission;

  constructor() { }

  ngOnInit(): void {
  }

}
