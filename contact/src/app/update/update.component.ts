import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  userforudate: any;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public commonservice: CommonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userforudate = params;
      console.log(params);
    });
  }
  submit(input) {
    console.log('input', input);
    input['id'] = this.userforudate['id'];
    this.commonservice.updateuser(input).subscribe(() => {
      alert('user updated successfully');
    });
  }
}
