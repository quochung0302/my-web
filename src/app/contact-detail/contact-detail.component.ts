import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact: any;
  constructor(private route: ActivatedRoute,
    private contactsService: ContactsService,
    private location: Location
  ) { }
  goBack() {
    this.location.back();
  }


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.contact = this.contactsService.getContact(id);
    console.log(this.contact);


  }

}
