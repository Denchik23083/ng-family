import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GodService } from 'src/app/services/users/god.service';
import { UserReadNameModel, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-user-to-admin',
  templateUrl: './user-to-admin.component.html',
  styleUrls: ['./user-to-admin.component.scss']
})
export class UserToAdminComponent implements OnInit {

  email: string = "";

  users$: BehaviorSubject<UserReadNameModel[]>;

  constructor(private service: GodService, private userService: UserService) {
    this.users$ = userService.users$;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe();
  }

  userToAdmin(id: number): void {
    this.service.userToAdmin(id).subscribe();
  }

  filter(): void {
    this.userService.getUsers().subscribe(() => {
      const updatedArr = this.users$.value.filter(b => b.email.startsWith(`${this.email}`));
      this.users$.next(updatedArr);
    });
  }

  reset(): void {
    this.email = "";
    this.filter();
  }

}
