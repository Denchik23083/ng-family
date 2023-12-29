import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-genus-add-child-page',
  templateUrl: './genus-add-child-page.component.html',
  styleUrls: ['./genus-add-child-page.component.scss']
})
export class GenusAddChildPageComponent implements OnInit {

  public permission = Permission;
  
  constructor() { }

  ngOnInit(): void {
  }

}
