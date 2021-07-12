import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contactForm: FormGroup;

  contactTypes: any[];

  contactId: number;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  get firstname() { return this.contactForm.get('firstname') }

  get lastname() { return this.contactForm.get('lastname') }

  get dob() { return this.contactForm.get('dob') }

  get email() { return this.contactForm.get('email') }

  get telephone() { return this.contactForm.get('telephone') }

  get contact_type_id() { return this.contactForm.get('contact_type_id') }

  ngOnInit(): void {
    this.getContactTypes();
    this.contactForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      contact_type_id: ['', Validators.required]
    })

  }

  ngAfterViewInit() {
    this.route.params.subscribe(param => {
      this.contactId = param.id;
      this.populateForm(this.contactId);
    })
  }

  populateForm(contactId: number) {
    this.contactService
      .getContact(contactId)
      .subscribe(contact => {
        this.contactForm.patchValue({
          firstname: contact.firstname,
          lastname: contact.lastname,
          dob: contact.dob,
          email: contact.email,
          telephone: contact.telephone,
          contact_type_id: contact.contact_type_id
        })
      })
  }

  getContactTypes() {
    this.contactService
      .getTypes()
      .subscribe(types => {
        this.contactTypes = types
      })
  }

  updateContact() {
    this.contactService
      .update(this.contactId, this.contactForm)
      .subscribe(() => {
        this.router.navigate(['contacts']).then(() => {
          this.toastrService.success("Contact has been updated.");
        });
      })
  }

}
