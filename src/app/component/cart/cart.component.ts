import { Component, OnInit } from '@angular/core';
import { fetch } from 'src/app/fetch.interface';
import { DataService } from 'src/app/service/data.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: fetch[] = [];
  cartCounts: { [id: string]: number } = {};
  checkoutText: boolean = false;
  message!: string;

  faTrash = faTrash;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    const ids: string[] = JSON.parse(localStorage.getItem("cartItems") || '[]');
    this.service.getCartProducts(ids).subscribe(products => {
      this.cartItems = products;

      if (products.length < 1) {
        this.message = "Cart is empty!"
      }
      // Initialize cartCounts with counts of each item
      this.cartItems.forEach(item => {
        this.cartCounts[item.id] = 1; // Assuming each item initially has count 1
      });
    });
  }

  deleteProduct(id: string) {
    this.service.deleteCartItem(id).subscribe(() => {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
      
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems.map(item => item.id)));
    });
  }

  getTotalPrice(id: string): number {
    const productCount = this.cartCounts[id] || 0;
    const item = this.cartItems.find(item => item.id === id);
    return item ? item.price * productCount : 0;
  }

  getWholeTotalPrice(): number {
    let wholeTotal = 0;
    this.cartItems.forEach(item => {
      const productCount = this.cartCounts[item.id] || 0;
      wholeTotal += item.price * productCount;
    });
    return wholeTotal;
  }

  add(id: string) {
    const item = this.cartItems.find(item => item.id === id);
    if (item && this.cartCounts[id] < item.stock) {
      this.cartCounts[id] = (this.cartCounts[id] || 0) + 1;
    }
  }

  minus(id: string) {
    if (this.cartCounts[id] > 1) {
      this.cartCounts[id]--;
    } else {
      this.deleteProduct(id);
    }
  }

  checkout() {
    this.checkoutText = !this.checkoutText;
  }
}
