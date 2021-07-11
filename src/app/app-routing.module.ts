import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactAddComponent } from './components/contact-add/contact-add.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/add', component: ContactAddComponent },
  { path: 'contacts/view/:id', component: ContactViewComponent },
  { path: 'contacts/edit/:id', component: ContactEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
