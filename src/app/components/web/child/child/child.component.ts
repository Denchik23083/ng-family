import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ChildModel, ChildService } from 'src/app/services/web/child.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  children$!: BehaviorSubject<ChildModel[]>;

  constructor(private childService: ChildService, private router: Router) {
    this.children$ = childService.children$;
  }

  ngOnInit(): void {
    this.childService.getAllChildren().subscribe();
  }

  details(id: number): void {
    this.router.navigate([`/children/${id}`]);
  }

}
