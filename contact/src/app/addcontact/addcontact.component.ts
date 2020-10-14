import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css'],
})
export class AddcontactComponent implements OnInit {
  alluser: Object;
  constructor(private commonservice: CommonService) {}

  ngOnInit(): void {}

  submit(submit) {
    console.log('input', submit);
    this.commonservice.createuser(submit).subscribe((Response) => {
      console.log('user added', Response);
      alert('Contact added successfully');
    });
  }
  getletestuser() {
    this.commonservice.getalluser().subscribe((Response) => {
      console.log('from addcon', Response);
      this.alluser = Response;
    });
  }
}
