import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdminService } from 'src/app/services/users/admin.service';
import { UserReadNameModel, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  email: string = "";

  users$: BehaviorSubject<UserReadNameModel[]>;

  constructor(private service: AdminService, private userService: UserService) {
    this.users$ = userService.users$;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe();
  }

  removeUser(id: number): void {
    this.service.removeUser(id).subscribe();
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
