import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserReadNameModel, UserService } from 'src/app/services/users/user.service';
import { GenusReadModel, GenusService } from 'src/app/services/web/genus.service';
import { ParentWriteModel } from 'src/app/services/web/parent.service';

@Component({
  selector: 'app-genus-add-parent',
  templateUrl: './genus-add-parent.component.html',
  styleUrls: ['./genus-add-parent.component.scss']
})
export class GenusAddParentComponent implements OnInit {

  genus$: BehaviorSubject<GenusReadModel>;
  maleAdults: UserReadNameModel[] = [];
  femaleAdults: UserReadNameModel[] = [];

  adults: ParentWriteModel = {
    id: 0,
    userId: 0
  }

  id!: number;
  
  constructor(private service: GenusService, private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.genus$ = service.genus$;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as any;
    this.service.getGenus(this.id).subscribe();
    this.userService.getMaleAdults().subscribe(maleAdults => this.maleAdults = maleAdults);
    this.userService.getFemaleAdults().subscribe(femaleAdults => this.femaleAdults = femaleAdults);
  }

  submit(form: NgForm): void {
    const adult = form.value as ParentWriteModel;

    this.service.addParent(adult, this.id).subscribe();
  }

}
