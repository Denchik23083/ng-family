import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PasswordWriteModel, UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  password: PasswordWriteModel = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  }

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  submit(form: NgForm): void {
    const updatePassword = form.value as PasswordWriteModel;
    
    this.service.updatePassword(updatePassword).subscribe();
  }

}
