import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  refresh(): void {
    this.service.refresh().subscribe();
  }

}
