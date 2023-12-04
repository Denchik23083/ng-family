import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$: BehaviorSubject<UserModel>; 
  
  constructor(private service: UserService) {
    this.user$ = service.user$;
  }

  ngOnInit(): void {
    this.service.getUser().subscribe();
  }

}
