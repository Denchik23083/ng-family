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
    this.service.getUser().subscribe(() => {
      if(this.user$.value.child != null)
      {
        this.user$.value.child.genus.children = this.user$.value.child.genus.children.filter(x => x != null);
      }
      if(this.user$.value.parent != null)
      {
        this.user$.value.parent.genus.parents = this.user$.value.parent.genus.parents.filter(x => x != null);
      }
    });    
  }

}
