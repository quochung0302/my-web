import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  name: string;
  name2 = '';
  isHighlight: boolean;
  demo = 'https://angular.io/assets/images/logos/angular/angular.svg';
  demo1 = { width: '50%' };
  forgot = false;
  currentStyle;
  arr = ['angular', 'nodeJS', 'react'];
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  eng = '';
  vnese = '';
  status = 'all';
  addWord() {

    this.arrWords.unshift({ id: this.arrWords.length + 1, en: this.eng, vn: this.vnese, memorized: false });

    this.eng = '';
    this.vnese = '';
    this.forgot = !this.forgot;
  }
  removeWord(id: number) {
    const index = this.arrWords.findIndex(e => e.id === id);
    this.arrWords.splice(index, 1);
  }
  // filterWords(){
  //   if(this.status === 'all'){
  //     return true;
  //   }
  //   else

  // }







  constructor() {

    this.name = 'Hung';
    this.isHighlight = true;
    this.currentStyle = {
      color: 'red',
      fontSize: '40px'

    };
  }

  ngOnInit() {

  }
  showEvent(event) {
    this.name = event.target.value;
    console.log(event);
    console.log(this.name2);
  }







  test(a) {
    console.log(a.value);
  }

}
