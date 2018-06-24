import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from '../contacts/contacts.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const abc: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'detail/:id/:name', component: ContactDetailComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(abc),

  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
