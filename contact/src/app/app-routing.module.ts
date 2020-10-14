import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AddmultiComponent } from './addmulti/addmulti.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddcontactComponent },
  { path: 'addmul', component: AddmultiComponent },
  { path: 'update', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
