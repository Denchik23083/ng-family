import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ChildModel, ChildService } from 'src/app/services/web/child.service';

@Component({
  selector: 'app-child-id',
  templateUrl: './child-id.component.html',
  styleUrls: ['./child-id.component.scss']
})
export class ChildIdComponent implements OnInit {

  child$: BehaviorSubject<ChildModel>;

  constructor(private childService: ChildService, private activatedRoute: ActivatedRoute) {
    this.child$ = childService.child$;
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any;
    this.childService.getChild(id).subscribe();
  }

}
