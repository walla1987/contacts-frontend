import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  contact: any;

  constructor(
    private contactService: ContactsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.getContact(param.id);
    })
  }

  getContact(contactId: number) {
    this.contactService
      .getContact(contactId)
      .subscribe(contact => {
        this.contact = contact;
      })
  }

}
