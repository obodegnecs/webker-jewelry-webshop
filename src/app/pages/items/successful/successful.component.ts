import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.scss']
})
export class SuccessfulComponent implements OnInit {

  userId: string = '';

  constructor(private actRoute: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe((param: any) => {
      this.userId = param.userId as string;
    })
  }

  

}
