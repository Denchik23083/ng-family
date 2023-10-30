import { Component, Input, OnInit } from '@angular/core';
import { AuthService, Permission } from 'src/app/services/auth/auth.service';
import { CheckPermission } from 'src/app/utils/check-permission';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent extends CheckPermission implements OnInit {

  @Input()
  childPermission?: Permission[];
  
  @Input()
  parentPermission?: Permission[];  

  @Input()
  adminPermission?: Permission[];
  
  @Input()
  godPermission?: Permission[];  

  hasChildPermission = false;
  hasParentPermission = false;
  hasAdminPermission = false;
  hasGodPermission = false;

  constructor(authService: AuthService) {
    super(authService);
  }

  ngOnInit(): void {
    this.hasChildPermission = super.checkPermission(this.childPermission);
    this.hasParentPermission = super.checkPermission(this.parentPermission);
    this.hasAdminPermission = super.checkPermission(this.adminPermission);
    this.hasGodPermission = super.checkPermission(this.godPermission);
  }

}
