import { Component, OnInit } from '@angular/core';
import { ListItemService } from '../list-item.service';
import { SearchComponent } from '../search/search.component';




@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  searchComponent: SearchComponent;
  listItem: any[];
  txt: string;
  getTxt() {
    this.txt = this.listItemSerice.txtSearch;
    console.log(this.txt);
  }




  constructor(public listItemSerice: ListItemService) { }

  ngOnInit() {
    this.listItemSerice.getList().subscribe(a => this.listItem = a);
    this.getTxt();


  }

}
