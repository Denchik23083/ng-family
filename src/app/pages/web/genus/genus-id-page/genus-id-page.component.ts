import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-genus-id-page',
  templateUrl: './genus-id-page.component.html',
  styleUrls: ['./genus-id-page.component.scss']
})
export class GenusIdPageComponent implements OnInit {

  public permission = Permission;

  constructor() { }

  ngOnInit(): void {
  }

}
