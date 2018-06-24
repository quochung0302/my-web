import { Component, OnInit, Input } from '@angular/core';

import { ListItemService } from '../list-item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() name: string;



  constructor(public listItemService: ListItemService ) { }

  ngOnInit() {
  }

}
