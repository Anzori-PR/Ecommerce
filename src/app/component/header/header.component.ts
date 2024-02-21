import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  product!: number;
  id: string[] = [];
  

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getAddToCartData().subscribe(res => {
      this.id = res.map(item => item.id);

      this.service.getCartProducts(this.id).subscribe(products => {
        this.product = products.length;
      });
    })
  }


}
