import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, GenderReadModel } from 'src/app/services/auth/auth.service';
import { UserWriteNameModel, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.scss']
})
export class ChangeInfoComponent implements OnInit {
  user: UserWriteNameModel = {
    firstName: '',
    email: '',
    birthDay: new Date(),
    genderId: 0
  }

  genders: GenderReadModel[] = [];
  
  constructor(private service: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.service.getUser().subscribe(user => {
      this.user.firstName = user.firstName;
      this.user.email = user.email;
      this.user.birthDay = user.birthDay;
      this.user.genderId = user.gender.id;
    });

    this.authService.getGenders()
      .subscribe(genders => this.genders = genders); 
  }

  submit(form: NgForm): void {
    const updateUser = form.value as UserWriteNameModel;
    
    this.service.updateUser(updateUser).subscribe();
  }

}
