import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {
  employees: any[] = [
    { id: 1, name: 'Ngo Quoc Hung' },
    { id: 2, name: 'Ngo Quoc Doanh' },
    { id: 3, name: 'Bui Minh tri' },

  ];
  txtSearch: string;
  add(a) {
    this.employees.unshift({ id: this.employees.length + 1, name: a });
    console.log(this.employees);
  }
  remove(name: string) {
    const index = this.employees.findIndex(e => e.name === name);
    this.employees.splice(index, 1);
    console.log(this.employees);
    console.log(index);
  }







  constructor() { }
  getList(): Observable<any[]> {

    return of(this.employees);
  }

}
