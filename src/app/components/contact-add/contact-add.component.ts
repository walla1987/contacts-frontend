import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  contactForm: FormGroup;

  contactTypes: any[];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactsService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.contactForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      contact_type_id: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getContactTypes();
  }

  get firstname() { return this.contactForm.get('firstname') }

  get lastname() { return this.contactForm.get('lastname') }

  get dob() { return this.contactForm.get('dob') }

  get email() { return this.contactForm.get('email') }

  get telephone() { return this.contactForm.get('telephone') }

  createContact() {
    this.contactService
      .create(this.contactForm)
      .subscribe((response) => {
        this.router.navigate(['contacts']).then(() => {
          this.toastrService.success("New contact has been added.")
        })
        this.contactForm.reset();
      }, error => {
        console.error(error)
      })
  }

  getContactTypes() {
    this.contactService.getTypes()
      .subscribe(types => {
        this.contactTypes = types
      })
  }

}
