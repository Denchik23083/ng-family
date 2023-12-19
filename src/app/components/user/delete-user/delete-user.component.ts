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

  parentsChildrenUsers$: BehaviorSubject<UserReadNameModel[]>;

  constructor(private service: AdminService, private userService: UserService) {
    this.parentsChildrenUsers$ = userService.parentsChildrenUsers$;
  }

  ngOnInit(): void {
    this.userService.getParentsChildrenUsers().subscribe();
  }

  removeUser(id: number): void {
    this.service.removeUser(id).subscribe();
  }

  filter(): void {
    this.userService.getParentsChildrenUsers().subscribe(() => {
      const updatedArr = this.parentsChildrenUsers$.value.filter(b => b.email.startsWith(`${this.email}`));
      this.parentsChildrenUsers$.next(updatedArr);
    });
  }

  reset(): void {
    this.email = "";
    this.filter();
  }

}
