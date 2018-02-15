import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {

  form = new FormGroup({
    companyName: new FormControl(''),
    companyNumber: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    request: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<AddInvoiceComponent>) {
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
