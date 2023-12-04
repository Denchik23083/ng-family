import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ParentModel, ParentService } from 'src/app/services/web/parent.service';

@Component({
  selector: 'app-parent-id',
  templateUrl: './parent-id.component.html',
  styleUrls: ['./parent-id.component.scss']
})
export class ParentIdComponent implements OnInit {

  parent$: BehaviorSubject<ParentModel>;

  constructor(private parentService: ParentService, private activatedRoute: ActivatedRoute) {
    this.parent$ = parentService.parent$;
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any;
    this.parentService.getParent(id).subscribe();
  }

}
