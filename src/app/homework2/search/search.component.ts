import { Component, OnInit } from '@angular/core';
import { ListItemService } from '../list-item.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  txt: string;

  constructor(public listItemService: ListItemService) { }
  search() {
    this.listItemService.txtSearch = this.txt;
    console.log(this.listItemService.txtSearch);
  }

  ngOnInit() {

  }

}
