import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fetch } from 'src/app/fetch.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit{
  computer: fetch[] = [];

  constructor(private service : DataService) {}

  ngOnInit(): void {
    this.service.getComputers().subscribe(res => {
      this.computer = res;  
    })
  }

}
