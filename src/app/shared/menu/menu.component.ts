import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Input() currentUser?: firebase.default.User | null;
  @Input() currentPage: string = '';
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    
   }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

  }

  menuSwitch() {
    this.selectedPage.emit(this.currentPage)
  }

  close(logout?: boolean) {
    if (logout === true) {
      this.onLogout.emit(logout);
    }
    this.onCloseSidenav.emit(true);
  }

}
