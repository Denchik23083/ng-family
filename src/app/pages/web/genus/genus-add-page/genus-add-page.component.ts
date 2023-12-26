import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-genus-add-page',
  templateUrl: './genus-add-page.component.html',
  styleUrls: ['./genus-add-page.component.scss']
})
export class GenusAddPageComponent implements OnInit {

  public permission = Permission;

  constructor() { }

  ngOnInit(): void {
  }

}
