import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-genus-update-page',
  templateUrl: './genus-update-page.component.html',
  styleUrls: ['./genus-update-page.component.scss']
})
export class GenusUpdatePageComponent implements OnInit {

  public permission = Permission;

  constructor() { }

  ngOnInit(): void {
  }

}
