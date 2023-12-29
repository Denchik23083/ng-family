import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService, Permission } from 'src/app/services/auth/auth.service';
import { UserReadModel, UserReadNameModel, UserService } from 'src/app/services/users/user.service';
import { GenusReadModel, GenusService } from 'src/app/services/web/genus.service';
import { CheckPermission } from 'src/app/utils/check-permission';

@Component({
  selector: 'app-genus-id',
  templateUrl: './genus-id.component.html',
  styleUrls: ['./genus-id.component.scss']
})
export class GenusIdComponent extends CheckPermission implements OnInit {
  @Input()
  adminPermission?: Permission[];
  
  @Input()
  godPermission?: Permission[];  

  hasAdminPermission = false;
  hasGodPermission = false;
  
  user$: BehaviorSubject<UserReadModel>; 
  genus$: BehaviorSubject<GenusReadModel>;
  
  maleAdults: UserReadNameModel[] = [];
  femaleAdults: UserReadNameModel[] = [];
  
  constructor(private service: GenusService, private userService: UserService, authService: AuthService, private activatedRoute: ActivatedRoute) {
    super(authService);
    this.genus$ = service.genus$;
    this.user$ = userService.user$;    
  }

  ngOnInit(): void {
    this.hasAdminPermission = super.checkPermission(this.adminPermission);
    this.hasGodPermission = super.checkPermission(this.godPermission);    
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any;
    this.service.getGenus(id).subscribe();
    this.userService.getUser().subscribe();
  }

  showMaleAdults(): void {
    this.userService.getMaleAdults().subscribe(maleAdults => this.maleAdults = maleAdults);
  }

  showFemaleAdults(): void {
    this.userService.getFemaleAdults().subscribe(femaleAdults => this.femaleAdults = femaleAdults);
  }

  deleteGenus(id: number) {
    this.service.deleteGenus(id).subscribe();
  }

}
