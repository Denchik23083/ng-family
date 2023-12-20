import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GenusReadModel, GenusService } from 'src/app/services/web/genus.service';

@Component({
  selector: 'app-genus-id',
  templateUrl: './genus-id.component.html',
  styleUrls: ['./genus-id.component.scss']
})
export class GenusIdComponent implements OnInit {

  genus$: BehaviorSubject<GenusReadModel>;

  constructor(private genusService: GenusService, private activatedRoute: ActivatedRoute) {
    this.genus$ = genusService.genus$;
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any;
    this.genusService.getGenus(id).subscribe();
  }

}
