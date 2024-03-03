import { Component, OnInit } from '@angular/core';
import { fetch } from 'src/app/fetch.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  Data: fetch[] = [];


  constructor(private service : DataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe(res => {
      this.Data = res;
    })
  }

  
}
