import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homework-article',
  templateUrl: './homework-article.component.html',
  styleUrls: ['./homework-article.component.scss']
})
export class HomeworkArticleComponent implements OnInit {
  @Input() src: string;
  @Input() alt: string;
  @Input() article: string;


  constructor() { }

  ngOnInit() {
  }

}
