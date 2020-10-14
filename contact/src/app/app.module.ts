import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { UpdateComponent } from './update/update.component';
import { AddmultiComponent } from './addmulti/addmulti.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddcontactComponent,
    UpdateComponent,
    AddmultiComponent,
    MainComponent,
  ],
  imports: [
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    // MatPaginator,
    // MatSort,
    MatTableModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  // exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
