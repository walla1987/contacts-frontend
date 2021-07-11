import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CONFIG } from '../config/app';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ContactsService extends BaseService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  create(form: FormGroup): Observable<any> {
    return this.http.post(CONFIG.base_url + "contacts/create", form.value).pipe(
      catchError(this.handleError)
    )
  }

  delete(contactId: number): Observable<any> {
    return this.http.delete(CONFIG.base_url + `contacts/delete/${contactId}`).pipe(
      catchError(this.handleError)
    )
  }

  update(contactId: number, form: FormGroup): Observable<any> {
    return this.http.patch(CONFIG.base_url + `contacts/update/${contactId}`, form.value).pipe(
      catchError(this.handleError)
    )
  }

  getTypes(): Observable<any> {
    return this.http.get(CONFIG.base_url + "contact/types").pipe(
      catchError(this.handleError)
    )
  }

  getContacts(): Observable<any> {
    return this.http.get(CONFIG.base_url + "contacts/list").pipe(
      catchError(this.handleError)
    );
  }

  getContact(contactId: number): Observable<any> {
    return this.http.get(CONFIG.base_url + `contacts/${contactId}`).pipe(
      catchError(this.handleError)
    )
  }

}
