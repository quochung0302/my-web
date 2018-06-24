import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.scss']
})
export class StructComponent implements OnInit {
  isShow = true;
  arrSub = ['angular', 'nodeJS', 'react']
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }];
  eng  = "";
  vnese = "";
  show = true;
  status = "All";
  addWord(){
    this.arrWords.unshift({
      id : this.arrWords.length +1,
      en : this.eng,
      vn : this.vnese,
      memorized : false
    });
    this.eng  = "";
    this.vnese = "";
    this.show = !this.show;
  }
  removeWord( id : number){
    const index = this.arrWords.findIndex(e => e.id === id)
    this.arrWords.splice(index, 1)

  }
  filter(){
    
  }

  constructor() { }

  ngOnInit() {
  }

}
