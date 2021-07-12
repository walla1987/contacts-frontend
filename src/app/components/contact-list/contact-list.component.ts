import { Component, OnInit, TemplateRef } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[];

  modalRef: BsModalRef;

  contactId: number;


  constructor(
    private contactService: ContactsService,
    private modalService: BsModalService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts()
      .subscribe(contacts => {
        this.contacts = contacts
      }, error => {
        console.error(error);
      })
  }

  openModal(contactId: number, template: TemplateRef<any>) {
    this.contactId = contactId;
    this.modalRef = this.modalService.show(template);
  }

  removeContact() {
    this.contactService
      .delete(this.contactId)
      .subscribe(() => {
        this.modalRef.hide();
        const index = this.contacts.findIndex(x => x.id === this.contactId)
        this.contacts.splice(index, 1);
        this.toastrService.success("Contact successfully deleted.")
      })
  }

}
