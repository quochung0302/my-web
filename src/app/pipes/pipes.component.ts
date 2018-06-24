import { Component, OnInit } from '@angular/core';
import { DYNAMIC_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  birthday = new Date(2015, 7, 15);
  people = {
    name : 'ngo quoc hung', age: 18
  }
  address = Promise.resolve('125 Tran Phu');

}
