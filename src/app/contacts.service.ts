import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts = [
    { id: 1, name: 'Teo', phoneNumber: '0123' },
    { id: 2, name: 'Ti', phoneNumber: '0456' },
    { id: 3, name: 'Tun', phoneNumber: '0789' },
  ];
  getContacts() {
    return this.contacts;
  }
  getContact(id: number) {
    return this.contacts.find(contact => contact.id === id);

  }


  constructor() { }
}
