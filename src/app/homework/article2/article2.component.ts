import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article2',
  templateUrl: './article2.component.html',
  styleUrls: ['./article2.component.scss']
})
export class Article2Component implements OnInit {
  @Input() key: string;
  @Input() src: string;
  @Input() alt: string;


  constructor() { }

  ngOnInit() {
  }

}
