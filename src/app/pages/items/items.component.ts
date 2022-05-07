import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/Item';
import { ItemsService } from '../../shared/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  itemsObject?: Array<Item>
  chosenItem?: Item;

  constructor(private itemsService: ItemsService) { 
  }

  ngOnInit(): void {
    this.itemsService.loadItemMeta('__credits.json').subscribe((data: Array<Item>) => {
      console.log(data);
      this.itemsObject = data;
    });
  }

  loadItem(itemObject: Item) {
    this.chosenItem = itemObject;
  }
}
