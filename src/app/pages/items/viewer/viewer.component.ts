import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/Cart';
import { Item } from 'src/app/shared/models/Item';
import { CartService } from 'src/app/shared/services/cart.service';
import { ItemsService } from 'src/app/shared/services/items.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnChanges {

  /*itemForm = new FormGroup ({
    id: new FormControl(''),
    itemname: new FormControl(''),
    itemprice: new FormControl(''),
    aboutitem: new FormControl('')
  })*/

  //itemForm = this.fromBuilder.group({})

  @Input() itemInput?: Item;
  loadedItem?: string;

  cartObj: Cart = {
    id: '',
    item_id: '',
    name: '',
    price: '',
    image_url: '',
    date: 0,
    email: ''
  };

  constructor(private router: Router, private itemService: ItemsService, private cartService: CartService) {}

  ngOnChanges(): void {
    if (this.itemInput?.id) {
      this.itemService.loadItem(this.itemInput.image_url).subscribe(data => {
        this.loadedItem = data;
        /*let reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          this.loadedImage = reader.result as string;
        }*/
      });
    }
  }

  ngOnInit(): void {
  }

  /*createItem(model: Item) {
    return this.fromBuilder.group(model);
  }*/

  addCart() {
    this.cartObj.image_url = this.itemInput?.image_url;
    this.cartObj.item_id = this.itemInput?.id;
    this.cartObj.name = this.itemInput?.name;
    this.cartObj.price = this.itemInput?.price;
    this.cartObj.email = (localStorage.getItem('email')) as string;
    this.cartObj.date = (new Date().getTime());
    //this.cart.push(this.cartObj);

    this.cartService.create(this.cartObj).then(_ => {
      this.router.navigateByUrl('/cart');
    }).catch(error => {
      console.error(error);
    }) 
  }

}
  
