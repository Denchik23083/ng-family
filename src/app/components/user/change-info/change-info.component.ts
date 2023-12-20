import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserWriteModel, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.scss']
})
export class ChangeInfoComponent implements OnInit {
  user: UserWriteModel = {
    firstName: '',
    email: '',
    birthDay: new Date(),
    genderId: 0
  }
  
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getUser().subscribe(user => {
      this.user.firstName = user.firstName;
      this.user.email = user.email;
      this.user.birthDay = user.birthDay;
      this.user.genderId = user.gender.id;
    });
  }

  submit(form: NgForm): void {
    const editUser = form.value as UserWriteModel;
    
    //this.service.edit(editUser).subscribe();
  }

}
