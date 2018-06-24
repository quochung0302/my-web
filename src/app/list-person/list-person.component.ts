import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {
  arrPeople = [
    { name : 'Ti', age : 11},
    { name : 'Teo', age : 12},
    {name : 'tun', age: 13}

  ];
  removeInParent(name: string){
    const index = this.arrPeople.findIndex(e => e.name === name);
    this.arrPeople.splice(index, 1);


    
  }

  constructor() { }

  ngOnInit() {
  }






}
