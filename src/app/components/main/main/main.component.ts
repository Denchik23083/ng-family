import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserReadModel, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  user$: BehaviorSubject<UserReadModel>;

  constructor(private service: UserService) {
    this.user$ = service.user$;
  }

  ngOnInit(): void {
  }

}
