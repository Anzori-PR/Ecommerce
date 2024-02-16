import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { fetch } from 'src/app/fetch.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  id!: string;
  view: fetch[] = [];
  constructor(private route : ActivatedRoute, private service : DataService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.service.getViewProduct(this.id).subscribe(
      res => {
        this.view = [res];
        console.log(this.view);
      },
    )
  
  }
}
