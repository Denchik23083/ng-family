import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GenusService, GenusWriteNameModel } from 'src/app/services/web/genus.service';

@Component({
  selector: 'app-genus-update',
  templateUrl: './genus-update.component.html',
  styleUrls: ['./genus-update.component.scss']
})
export class GenusUpdateComponent implements OnInit {

  genus: GenusWriteNameModel = {
    name: ''
  }

  id!: number;

  constructor(private service: GenusService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as any;
    this.service.getGenus(this.id).subscribe(genus => {
      this.genus.name = genus.name;
    });

  }

  submit(form: NgForm): void {
    const updateGenus = form.value as GenusWriteNameModel;
    
    this.service.updateGenus(updateGenus, this.id).subscribe();
  }

}
