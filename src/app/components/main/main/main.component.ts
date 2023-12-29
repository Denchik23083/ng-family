import { Component, Input, OnInit } from '@angular/core';
import { AuthService, Permission } from 'src/app/services/auth/auth.service';
import { CheckPermission } from 'src/app/utils/check-permission';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends CheckPermission implements OnInit {
  @Input()
  permissions?: Permission[];
  hasPermissions = false;

  constructor(private service: AuthService) {
    super(service);
  }

  ngOnInit(): void {
    this.hasPermissions = super.checkPermission(this.permissions);
  }

}
