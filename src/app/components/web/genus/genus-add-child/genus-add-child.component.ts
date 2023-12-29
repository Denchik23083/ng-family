import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserReadNameModel, UserService } from 'src/app/services/users/user.service';
import { ChildWriteModel } from 'src/app/services/web/child.service';
import { GenusReadModel, GenusService } from 'src/app/services/web/genus.service';

@Component({
  selector: 'app-genus-add-child',
  templateUrl: './genus-add-child.component.html',
  styleUrls: ['./genus-add-child.component.scss']
})
export class GenusAddChildComponent implements OnInit {

  genus$: BehaviorSubject<GenusReadModel>;
  youths: UserReadNameModel[] = [];

  youth: ChildWriteModel = {
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
    this.userService.getYouths().subscribe(youths => this.youths = youths);
  }

  submit(form: NgForm): void {
    const youth = form.value as ChildWriteModel;

    this.service.addChild(youth, this.id).subscribe();
  }

}
