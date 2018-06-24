import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homework-social',
  templateUrl: './homework-social.component.html',
  styleUrls: ['./homework-social.component.scss']
})
export class HomeworkSocialComponent implements OnInit {
  @Input() socialName: string;
  @Input() socialUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
