import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/shared/models/Item';
import { ItemsService } from 'src/app/shared/services/items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() itemsObjectInput?: Array<any>;
  @Output() itemObjectEmitter: EventEmitter<any> = new EventEmitter;
  chosenItem: Item = {
    id: '',
    name: '',
    price: '',
    image_url: '',
    about: '',
  };;
  items: Array<Item> = [];

  constructor(private itemService: ItemsService) {
   }

    ngOnChanges() {
      /*if (this.itemsObjectInput) {
        this.chosenItem = this.itemsObjectInput[0];
        this.reload();
      }*/
      this.itemService.getAllByName().subscribe(item => {
        this.items = item;
        this.chosenItem = this.items[0];
        this.reload();
      }).unsubscribe;
    }

  ngOnInit(): void {
  }

  reload() {
    this.itemObjectEmitter.emit(this.chosenItem);
  }

}
