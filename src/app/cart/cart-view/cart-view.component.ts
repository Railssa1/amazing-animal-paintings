import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  cartItens: Product[] = [];
  totalPrice = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getCartItens().subscribe(data => {
      this.cartItens = data
      this.getTotalPrice();
    });
  }

  getTotalPrice(): number {
    this.cartItens.forEach((item) => {
      this.totalPrice += item.price;
    });
    return this.totalPrice;
  }

  clearCart(): void {
    this.cartService.cleanCart().subscribe();
  }

  checkout(): void {
    this.cartService.checkout(this.cartItens).subscribe()
  }

}
