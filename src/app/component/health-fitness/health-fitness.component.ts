import { Component, OnInit } from '@angular/core';
import { fetch } from 'src/app/fetch.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-health-fitness',
  templateUrl: './health-fitness.component.html',
  styleUrls: ['./health-fitness.component.css']
})
export class HealthFitnessComponent implements OnInit{
  Health: fetch[] = [];

  constructor(private service : DataService) {}

  ngOnInit(): void {
    this.service.getHealth().subscribe(res => {
      this.Health = res;  
    })
  }
  
}
