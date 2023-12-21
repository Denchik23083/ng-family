import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, GenderReadModel, RegisterWriteModel } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register: RegisterWriteModel = {
    firstName: '',
    email: '',
    birthDay: new Date(),
    password: '',
    confirmPassword: '',
    genderId: 1
  };

  genders: GenderReadModel[] = [];
  
  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.getGenders()
      .subscribe(genders => this.genders = genders);
  }

  submit(form: NgForm): void {
    const registerUser = form.value as RegisterWriteModel;
    
    this.service.register(registerUser).subscribe();
  }

}
