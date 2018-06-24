import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  listItem = ['Hùng', 'Hải', 'Đồng'];
  addByClick(name: string) {
    this.listItem.unshift(name);
    console.log(this.listItem);

  }

}
