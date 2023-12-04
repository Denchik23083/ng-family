import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ParentModel, ParentService } from 'src/app/services/web/parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parents$!: BehaviorSubject<ParentModel[]>;

  constructor(private parentService: ParentService, private router: Router) {
    this.parents$ = parentService.parents$;
  }

  ngOnInit(): void {
    this.parentService.getAllParents().subscribe();
  }

  details(id: number): void {
    this.router.navigate([`/parents/${id}`]);
  }

}
