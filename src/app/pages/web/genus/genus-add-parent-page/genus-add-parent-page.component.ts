import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-genus-add-parent-page',
  templateUrl: './genus-add-parent-page.component.html',
  styleUrls: ['./genus-add-parent-page.component.scss']
})
export class GenusAddParentPageComponent implements OnInit {

  public permission = Permission;

  constructor() { }

  ngOnInit(): void {
  }

}
