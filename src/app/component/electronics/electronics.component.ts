import { Component, OnInit } from '@angular/core';
import { fetch } from 'src/app/fetch.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit{
  Electronics: fetch[] = [];

  constructor(private service : DataService) {}

  ngOnInit(): void {
    this.service.getElectronics().subscribe(res => {
      this.Electronics = res;  
    })
  }
}
