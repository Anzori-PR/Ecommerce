import { Component, OnInit } from '@angular/core';
import { fetch } from 'src/app/fetch.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home-kitchen',
  templateUrl: './home-kitchen.component.html',
  styleUrls: ['./home-kitchen.component.css']
})
export class HomeKitchenComponent implements OnInit{
  Home: fetch[] = [];

  constructor(private service : DataService) {}

  ngOnInit(): void {
    this.service.getHealth().subscribe(res => {
      this.Home = res;  
    })
  }
}
