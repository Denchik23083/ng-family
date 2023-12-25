import { Component, OnInit } from '@angular/core';
import { UserReadNameModel, UserService } from 'src/app/services/users/user.service';
import { GenusService } from 'src/app/services/web/genus.service';

@Component({
  selector: 'app-genus-add',
  templateUrl: './genus-add.component.html',
  styleUrls: ['./genus-add.component.scss']
})
export class GenusAddComponent implements OnInit {
    
  maleAdults: UserReadNameModel[] = [];
  femaleAdults: UserReadNameModel[] = [];
  youths: UserReadNameModel[] = [];

  constructor(private service: GenusService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMaleAdults().subscribe(maleAdults => this.maleAdults = maleAdults);
    this.userService.getFemaleAdults().subscribe(femaleAdults => this.femaleAdults = femaleAdults);
    this.userService.getYouths().subscribe(youths => this.youths = youths);
  }

}
