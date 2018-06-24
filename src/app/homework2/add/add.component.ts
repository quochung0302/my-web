import { Component, OnInit } from '@angular/core';
import { ListItemService } from '../list-item.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  name = '';



  constructor(public listItemService: ListItemService) { }

  ngOnInit() {
  }

}
