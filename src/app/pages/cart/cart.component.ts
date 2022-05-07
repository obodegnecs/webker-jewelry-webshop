import { Location } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/Cart';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges{

  loadedCart: Array<Cart> = [];

  constructor(private cartService: CartService, private router: Router, private location: Location) { }

  ngOnChanges(): void {
    
  }

  ngOnInit(): void {
    this.cartService.getCurrentUsersCartByDate(localStorage.getItem('email') as string).subscribe(cart => {
      this.loadedCart = cart;
    }).unsubscribe;
  }

  delete(cart: Cart) {
    this.cartService.delete(cart.id).then(() => {
      console.log('Delete was successful')
    }).catch(error => {
      console.error(error);
    })
  }

  back() {
    this.location.back();
  }
}
