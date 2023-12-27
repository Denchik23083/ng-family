import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserReadNameModel, UserService } from 'src/app/services/users/user.service';
import { GenusReadModel, GenusService } from 'src/app/services/web/genus.service';

@Component({
  selector: 'app-genus-id',
  templateUrl: './genus-id.component.html',
  styleUrls: ['./genus-id.component.scss']
})
export class GenusIdComponent implements OnInit {

  genus$: BehaviorSubject<GenusReadModel>;

  IsShowMaleAdults = false;
  IsShowFemaleAdults = false;
  IsShowYouths = false;
  
  maleAdults: UserReadNameModel[] = [];
  femaleAdults: UserReadNameModel[] = [];
  youths: UserReadNameModel[] = [];

  constructor(private service: GenusService, private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.genus$ = service.genus$;
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any;
    this.service.getGenus(id).subscribe();
  }

  showMaleAdults(): void {
    this.userService.getMaleAdults().subscribe(maleAdults => this.maleAdults = maleAdults);
  }

  showFemaleAdults(): void {
    this.userService.getFemaleAdults().subscribe(femaleAdults => this.femaleAdults = femaleAdults);
  }

  showYouths(): void {
    this.userService.getYouths().subscribe(youths => this.youths = youths);
  }

  deleteGenus(id: number) {
    this.service.deleteGenus(id).subscribe();
  }

}
