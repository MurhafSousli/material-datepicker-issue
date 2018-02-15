import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { InvoicesHeaderDetails } from '../../models';

@Component({
  selector: 'app-received-invoices',
  templateUrl: './received-invoices.component.html',
  styleUrls: ['./received-invoices.component.scss']
})
export class ReceivedInvoicesComponent {

  dataSource = new MatTableDataSource();

  @Input() set data(data: InvoicesHeaderDetails[]) {
    this.dataSource.data = data;
  }

  @Input() columns: string[];

  @Input() set filterValue(value: string) {
    if (value) {
      value = value.trim(); // Remove whitespace
      value = value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    }
    this.dataSource.filter = value;
  }
}
