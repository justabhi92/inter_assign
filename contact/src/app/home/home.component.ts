import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from '../api-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

export interface Userdata {
  s_no: string;
  Full_name: string;
  Phone_numbers: number;
  Email: string;
  Company: String;
  Date_birth: Date;
}
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  animal: string;
  name: string;

  // S.no,Name, Username, contact, file claim date, Transcription languages, Rating , status,
  displayedColumns: string[] = [
    's_no',
    'name',
    'Mobile',
    'email',
    'Company',
    'Birthdate',
    'action',
  ];
  dataSource: MatTableDataSource<Userdata>;

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort: MatSort;
  input: { URL: string };
  Users: any;
  UsersList: any;
  constructor(
    public apiservice: ApiServiceService,
    public commonservice: CommonService,
    public router: Router
  ) {
    this.dataSource = new MatTableDataSource(this.UsersList);
  }

  ngOnInit() {
    this.UsersList = null;
    this.input = {
      URL: '/vendorQCdropdown/',
    };

    this.commonservice.getalluser().subscribe((Response) => {
      console.log('from addcon', Response);
      this.UsersList = Response;
      this.dataSource = new MatTableDataSource(this.UsersList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog() {}

  openDeleteDialog(row) {
    console.log(row);
    if (confirm('Do you really want to Delete Contact ?')) {
      this.commonservice.deleteuser(row).subscribe(() => {
        alert('You have deleted contact successfully !');
        this.ngOnInit();
      });
    } else {
      alert('Great You can still Have Contact!');
    }
  }
  openEditDialog(row) {
    // console.log('row', row);
    this.router.navigate(['update', row]);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
