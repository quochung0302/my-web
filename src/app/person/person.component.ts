import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  @Output() myClick = new EventEmitter();
  removeInChild() {
    this.myClick.emit();
  }

  constructor() { }

  ngOnInit() {
  }



}