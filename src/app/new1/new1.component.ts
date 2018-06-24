import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrls: ['./new1.component.scss']
})
export class New1Component implements OnInit {
  @Input() name: string;
  @Input() age: number;

  constructor() { }

  ngOnInit() {
  }

}
