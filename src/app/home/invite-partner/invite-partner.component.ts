import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-invite-partner',
  templateUrl: './invite-partner.component.html',
  styleUrls: ['./invite-partner.component.scss']
})
export class InvitePartnerComponent implements OnInit {

  form = new FormGroup({
    partner: new FormControl(''),
    companyName: new FormControl(''),
    companyNumber: new FormControl(''),
    contactName: new FormControl(''),
    lastName: new FormControl(''),
    contactEmail: new FormControl(''),
    file: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<InvitePartnerComponent>) {
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}
