import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactAddComponent } from '../components/contact-add/contact-add.component';
import { ContactListComponent } from '../components/contact-list/contact-list.component';
import { ContactViewComponent } from '../components/contact-view/contact-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    ContactAddComponent,
    ContactListComponent,
    ContactViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class ContactModule { }
