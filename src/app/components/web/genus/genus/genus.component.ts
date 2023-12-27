import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GenusReadNameModel, GenusService } from 'src/app/services/web/genus.service';

@Component({
  selector: 'app-genus',
  templateUrl: './genus.component.html',
  styleUrls: ['./genus.component.scss']
})
export class GenusComponent implements OnInit {

  allGenus$!: BehaviorSubject<GenusReadNameModel[]>;

  constructor(private genusService: GenusService, private router: Router) {
    this.allGenus$ = genusService.allGenus$;
  }

  ngOnInit(): void {
    this.genusService.getAllGenus().subscribe();
  }

  details(id: number): void {
    this.router.navigate([`/genus/${id}`]);
  }

}
