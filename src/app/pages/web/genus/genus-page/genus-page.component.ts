import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-genus-page',
  templateUrl: './genus-page.component.html',
  styleUrls: ['./genus-page.component.scss']
})
export class GenusPageComponent implements OnInit {

  public permission = Permission;

  constructor() { }

  ngOnInit(): void {
  }

}
