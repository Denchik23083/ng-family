import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserReadNameModel, UserService, UserWriteModel } from 'src/app/services/users/user.service';
import { ChildWriteModel } from 'src/app/services/web/child.service';
import { GenusService, GenusWriteModel } from 'src/app/services/web/genus.service';
import { ParentWriteModel } from 'src/app/services/web/parent.service';

@Component({
  selector: 'app-genus-add',
  templateUrl: './genus-add.component.html',
  styleUrls: ['./genus-add.component.scss']
})
export class GenusAddComponent implements OnInit {
    
  genus: GenusWriteModel = {
    name: '',
    children: [],
    parents: []
  }

  maleAdults: UserReadNameModel[] = [];
  femaleAdults: UserReadNameModel[] = [];
  youths: UserReadNameModel[] = [];
  selectedYouths: UserReadNameModel[] = [];

  male!: UserWriteModel;
  female!: UserWriteModel;

  parentMale: ParentWriteModel = {
    id: 0,
    userId: 0
  }

  parentFemale: ParentWriteModel = {
    id: 0,
    userId: 0
  }

  youth: ChildWriteModel = {
    id: 0,
    userId: 0
  }

  constructor(private service: GenusService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMaleAdults().subscribe(maleAdults => this.maleAdults = maleAdults);
    this.userService.getFemaleAdults().subscribe(femaleAdults => this.femaleAdults = femaleAdults);
    this.userService.getYouths().subscribe(youths => this.youths = youths);
  }
  
  submit(form: NgForm): void {
    const genus = form.value as GenusWriteModel;
    
    this.fillData(genus);

    this.service.createGenus(this.genus).subscribe(() => {
      this.genus.parents = [];
      this.genus.children = [];
    });
  }

  fillData(genus: GenusWriteModel): void {
    this.genus.name = genus.name;
    this.parentMale = { id: 0, userId: this.male.id };    
    this.parentFemale = { id: 0, userId: this.female.id };    
    this.genus.parents.push(this.parentMale);
    this.genus.parents.push(this.parentFemale);

    this.selectedYouths.forEach(youth => {
      this.youth = { id: 0, userId: youth.id };    
      this.genus.children.push(this.youth)
    })
  }

  addChild(model: UserReadNameModel): void {
    this.youths = this.youths.filter(t => t.id != model.id);
    this.selectedYouths.push(model);
  }
  
  deleteChild(model: UserReadNameModel): void {
    this.selectedYouths = this.selectedYouths.filter(t => t.id != model.id);
    this.youths.push(model);
  }
}
