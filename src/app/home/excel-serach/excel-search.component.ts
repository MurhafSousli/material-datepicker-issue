import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-excel-search',
  templateUrl: './excel-search.component.html',
  styleUrls: ['./excel-search.component.scss']
})
export class ExcelSearchComponent {

  form = new FormGroup({
    from: new FormControl(''),
    to: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<ExcelSearchComponent>) {
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

}
